import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { toast } from "sonner";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Formspree endpoint (set in .env: VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/yourFormId)
  const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT ?? "https://formspree.io/f/maqyrdol";

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, message } = formData;
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("Please fill out all fields.");
      return;
    }

    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    // If no Formspree endpoint configured, fallback to mailto
    if (!FORMSPREE_ENDPOINT) {
      const subject = encodeURIComponent(`Website message from ${name}`);
      const body = encodeURIComponent(`Name: ${name}%0AEmail: ${email}%0A%0A${message}`);
      window.location.href = `mailto:${"acapucion123@gmail.com"}?subject=${subject}&body=${body}`;
      toast.success("Opening your mail client to send the message...");
      setFormData({ name: "", email: "", message: "" });
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        toast.success("Message sent! I'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        const data = await res.json().catch(() => null);
        const errMsg = data?.error || data?.message || "Failed to send message.";
        toast.error(errMsg);
      }
    } catch (err) {
      toast.error("An error occurred while sending your message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <p className="text-accent font-semibold text-lg mb-2 uppercase tracking-wide">Get In Touch</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Let's Work Together
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how I can help bring your vision to life.
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-primary/20 hover:bg-primary hover:text-primary-foreground"
            >
              <a href="/Arjohn Capucion - Resume.pdf" download="Arjohn Capucion - Resume.pdf">
                Download Resume
              </a>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a
              href="mailto:acapucion123@gmail.com"
              className="group"
            >
              <Card className="border-border hover:shadow-[var(--shadow-elegant)] transition-all duration-300 bg-card h-full">
                <CardContent className="p-6 text-center">
                  <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <Mail size={24} className="text-accent group-hover:text-accent-foreground" />
                  </div>
                  <h3 className="font-bold mb-2 text-foreground">Email</h3>
                  <p className="text-sm text-muted-foreground">acapucion123@gmail.com</p>
                </CardContent>
              </Card>
            </a>

            <a
              href="https://www.linkedin.com/in/arjohn-capucion/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="border-border hover:shadow-[var(--shadow-elegant)] transition-all duration-300 bg-card h-full">
                <CardContent className="p-6 text-center">
                  <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <Linkedin size={24} className="text-accent group-hover:text-accent-foreground" />
                  </div>
                  <h3 className="font-bold mb-2 text-foreground">LinkedIn</h3>
                  <p className="text-sm text-muted-foreground">@arjohncapucion</p>
                </CardContent>
              </Card>
            </a>

            <a
              href="https://github.com/arjohn405"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="border-border hover:shadow-[var(--shadow-elegant)] transition-all duration-300 bg-card h-full">
                <CardContent className="p-6 text-center">
                  <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <Github size={24} className="text-accent group-hover:text-accent-foreground" />
                  </div>
                  <h3 className="font-bold mb-2 text-foreground">GitHub</h3>
                  <p className="text-sm text-muted-foreground">@arjohn405</p>
                </CardContent>
              </Card>
            </a>
          </div>

          <Card className="border-border shadow-[var(--shadow-elegant)] bg-card">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-background border-input"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-background border-input"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-background border-input resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/** show configuration hint if Formspree endpoint is not set */}
                {!import.meta.env.VITE_FORMSPREE_ENDPOINT && (
                  <p className="text-sm text-muted-foreground">
                    To send messages directly from this form, set <code>VITE_FORMSPREE_ENDPOINT</code> in a <code>.env</code> file (example: <code>https://formspree.io/f/yourFormId</code>). Without it the form will open your mail client as a fallback.
                  </p>
                )}

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

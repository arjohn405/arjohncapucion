import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Work } from "@/components/Work";
import { About } from "@/components/About";
import { WorkExperience } from "@/components/WorkExperience";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <Work />
        <About />
        <WorkExperience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";

const timeline = [
  {
    company: "Starpay Corporation",
    title: "Technical Product Manager & UI/UX Designer",
    date: "June 2025 — Present",
    bullets: [
      "Led cross-functional collaboration between designers and developers to refine product flows and visual consistency.",
      "Defined and implemented scalable UI components in Figma and front-end prototypes.",
      "Managed design reviews, feature rollouts, and API integrations to ensure releases met user needs and brand alignment.",
    ],
  },
  {
    company: "Starpay Corporation",
    title: "Technical Product Manager Intern",
    date: "March 2025 — May 2025",
    bullets: [
      "Designed and developed responsive front-end components, enhancing UI/UX for a client-facing web application.",
      "Proposed UX/UI enhancements to optimize user workflows, resulting in a more intuitive interface.",
      "Coordinated with teams to streamline API exposure, improving partner onboarding efficiency.",
    ],
  },
  {
    company: "SQME Professionals, Inc.",
    title: "Web Developer Intern",
    date: "October 2021 — January 2022",
    bullets: [
      "Gained hands-on experience in HTML, CSS, and JavaScript while collaborating with development teams.",
      "Supported product enhancements and participated in client-facing meetings and design reviews.",
      "Contributed to product documentation and QA to improve release readiness.",
    ],
  },
];

export const WorkExperience = () => {
  const itemsRef = useRef<Array<HTMLDivElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  useEffect(() => {
    // IntersectionObserver to track which item is prominent in the viewport
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number(entry.target.getAttribute("data-idx"));
          if (entry.isIntersecting && entry.intersectionRatio > 0.45) {
            setActiveIndex(idx);
          }
        });
      },
      { threshold: [0.45] }
    );

    itemsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // handle direct hash links like #experience-item-1
    const scrollToHash = () => {
      if (typeof window === "undefined") return;
      const hash = window.location.hash;
      if (!hash || !hash.startsWith("#experience-item-")) return;
      const el = document.querySelector(hash) as HTMLElement | null;
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        el.focus({ preventScroll: true });
        const idx = Number(el.getAttribute("data-idx"));
        if (!Number.isNaN(idx)) setActiveIndex(idx);
      }
    };

    // run on mount
    scrollToHash();
    // run on hash change
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);

  return (
    <section id="experience" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-accent font-semibold text-lg mb-2 uppercase tracking-wide">Experience</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-foreground">Previous Work</h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
              Creative and systems-minded UX/UI Designer with experience crafting intuitive digital products and scalable design components.
            </p>
          </div>

          <div className="relative">
            {/* vertical line for md+ screens (centered in the left column) */}
            <div className="hidden md:block absolute left-12 top-0 bottom-0 w-px bg-border z-0" />

            <div className="space-y-12">
              {timeline.map((item, idx) => (
                <div
                  key={item.title + idx}
                  ref={(el) => (itemsRef.current[idx] = el)}
                  data-idx={idx}
                  id={`experience-item-${idx}`}
                  tabIndex={-1}
                  className="group flex flex-col md:flex-row md:items-start md:gap-6"
                >
                  <div className="md:w-24 md:flex md:flex-col md:items-center md:relative">
                    <div className={`md:absolute md:left-10 md:top-2 md:flex md:flex-col md:items-center z-10`}>
                      <div
                        className={`w-4 h-4 rounded-full bg-accent border-2 border-background transform transition-all duration-300 ${
                          activeIndex === idx
                            ? "scale-125 shadow-[0_0_20px_rgba(99,102,241,0.30)]"
                            : "group-hover:scale-125 group-hover:shadow-[0_0_18px_rgba(99,102,241,0.25)]"
                        }`}
                      />
                      {/* short connector segment under dot that highlights on card hover or when active */}
                      <div
                        className={`hidden md:block h-12 w-px opacity-70 transition-all duration-300 mt-3 ${
                          activeIndex === idx
                            ? "bg-accent h-16 opacity-100"
                            : "bg-border group-hover:bg-accent group-hover:h-16"
                        }`}
                      />
                    </div>
                  </div>

                  <div className="flex-1">
                    <Card className="border-border hover:shadow-[var(--shadow-elegant)] transition-all duration-300 bg-card">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between gap-4">
                          <div className="min-w-0">
                            <h4 className="font-bold text-lg mb-1 text-foreground">{item.title}</h4>
                            <p className="text-sm text-muted-foreground truncate">{item.company}</p>
                          </div>

                          <div className="flex-shrink-0 text-sm text-muted-foreground md:text-right">
                            {item.date}
                          </div>
                        </div>

                        <ul className="mt-3 list-disc list-inside text-muted-foreground text-sm space-y-1">
                          {item.bullets.map((b, i) => (
                            <li key={i}>{b}</li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

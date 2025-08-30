import React, { useEffect, useState } from "react";
import { AuroraBackground } from "@/components/magicui/aurora-background";
import { Meteors } from "@/components/magicui/meteors";
import { AuroraText } from "@/components/magicui/aurora-text";
import { ShinyButton } from "@/components/magicui/shiny-button";
import gsoc from "@/assets/images/gsoclogo.png";
import somaiya from "@/assets/images/somaiya.png";
import csi from "@/assets/images/csi.png";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    document.title = "Ishwari Dhamdhere | Portfolio";
  }, []);

  useEffect(() => {
    const media = window.matchMedia(query);
    const handler = () => setMatches(media.matches);
    handler();
    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, [query]);

  return matches;
}

const skills = {
  Languages: ["C/C++", "TypeScript", "JavaScript", "Python"],
  Frameworks: ["React", "Express", "Node.js"],
  Styling: ["Tailwind CSS", "ShadCN", "CSS"],
  Databases: ["MongoDB", "MySQL", "Firebase"],
  Tools: ["Git", "Docker", "Vercel", "VS Code"],
  Other: ["Redux Toolkit", "Axios", "Postman", "REST APIs"],
};

const Home = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width: 639px)");
  const Wrapper: React.ElementType = isMobile ? "div" : AuroraBackground;

  return (
    <Wrapper className="bg-white dark:bg-black">
      <div className="relative w-full min-h-screen overflow-hidden font-sans text-neutral-800 dark:text-foreground">
        {!isMobile && (
          <Meteors className="absolute inset-0 z-0 pointer-events-none opacity-30 dark:opacity-50 hidden sm:block" />
        )}
        <div className="absolute inset-0 z-0 bg-white/20 dark:bg-black/60" />

        <main className="relative z-10 px-8 py-16 pb-28 flex flex-col items-center">
          <div className="text-left space-y-12 max-w-3xl w-full leading-relaxed">
            {/* Hero */}
            <section className="flex flex-col space-y-2">
              <h1 className="text-6xl font-extrabold text-black dark:text-white">
                Hi,{" "}
                <AuroraText className="text-outline">
                  Ishwari Dhamdhere
                </AuroraText>{" "}
                here
              </h1>
              <p className="text-xl text-neutral-600 dark:text-muted-foreground">
                24 years old last time I checked
              </p>
            </section>

            {/* About */}
            <section className="space-y-2">
              <h2 className="text-2xl font-semibold tracking-tight">About</h2>
              <p className="text-neutral-700 dark:text-muted-foreground">
                I'm a fullstack developer who enjoys building clean, functional
                web apps.
              </p>
              <p className="text-neutral-700 dark:text-muted-foreground">
                Right now, I'm contributing to GSoC with The Mifos Initiative
                building secure financial data operations in the new web app
                using React.
              </p>
            </section>

            {/* Experience */}
            <section className="space-y-3">
              <h2 className="text-2xl font-semibold tracking-tight">
                Experience
              </h2>
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-3">
                      <img
                        src={gsoc}
                        alt="GSoC logo"
                        className="h-12 w-auto object-contain"
                      />
                      <div>
                        <p className="font-medium">
                          Google Summer of Code @ Mifos Initiative
                        </p>
                        <p className="text-sm text-neutral-600 dark:text-muted-foreground">
                          Contributor
                        </p>
                      </div>
                    </div>
                    <ShinyButton
                      className="px-4 py-1 text-xs rounded-full mt-1"
                      onClick={() => navigate("/projects/gsoc-project")}
                    >
                      Know more
                    </ShinyButton>
                  </div>
                  <p className="text-sm text-neutral-500 dark:text-muted-foreground mt-1">
                    May 2025 - Present
                  </p>
                </div>

                <div className="flex justify-between items-start">
                  <div className="space-y-1 mb-1">
                    <div className="flex items-center space-x-3">
                      <img
                        src={somaiya}
                        alt="Somaiya Logo"
                        className="h-12 w-auto object-contain"
                      />
                      <div>
                        <p className="font-medium">
                          Somaiya Web Development Cell
                        </p>
                        <p className="text-sm text-neutral-600 dark:text-muted-foreground">
                          FullStack Developer
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-neutral-500 dark:text-muted-foreground mt-1">
                    Dec 2024 - Present
                  </p>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <img
                      src={csi}
                      alt="CSI Logo"
                      className="h-12 w-auto object-contain"
                    />
                    <div>
                      <p className="font-medium">
                        Computer Society of India KJSCE
                      </p>
                      <p className="text-sm text-neutral-600 dark:text-muted-foreground">
                        Operations Team Member
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-neutral-500 dark:text-muted-foreground mt-1">
                    Aug 2024 - May 2025
                  </p>
                </div>
              </div>
            </section>

            {/* Education */}
            <section className="space-y-2">
              <h2 className="text-2xl font-semibold tracking-tight">
                Education
              </h2>
              <div className="flex justify-between items-start">
                <div className="flex items-center space-x-3">
                  <img
                    src={somaiya}
                    alt="College Logo"
                    className="h-12 w-auto object-contain"
                  />
                  <div>
                    <p className="font-medium">
                      NEW JERSEY CITY UNIVERSITY (NJCU) |<br /> New Jersey,
                      United States of America (Transfer)
                    </p>
                    <p className="text-sm text-neutral-600 dark:text-muted-foreground">
                      Bachelor in Business Management <br />
                      (GPA- 3.8/4.0)
                    </p>
                  </div>
                </div>
                <p className="text-sm text-neutral-500 dark:text-muted-foreground mt-1">
                  Jan 2023-May 2023
                </p>
              </div>
            </section>

            {/* Skills */}
            <section className="max-w-5xl mx-auto space-y-6 mt-12">
              <h2 className="text-2xl font-bold tracking-tight">Skills</h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {Object.entries(skills).map(([category, list]) => (
                  <div
                    key={category}
                    className="rounded-xl border border-neutral-200 dark:border-muted p-4 bg-white/80 dark:bg-background/50 shadow-sm ring-1 ring-black/5 dark:ring-white/10 transition-all hover:scale-[1.02]"
                  >
                    <h3 className="text-lg font-semibold mb-3">{category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {list.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="text-sm px-2 py-1"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-16  space-y-4">
              <h2 className="text-2xl font-bold tracking-tight">Contact</h2>
              <p className="text-muted-foreground">
                If you'd like to reach out, just drop me an email:
              </p>
              <p className="text-lg font-medium text-blue-500 hover:underline">
                <a href="mailto:craig@example.com">craig.rosario04@gmail.com</a>
              </p>
            </section>
          </div>
        </main>
      </div>
    </Wrapper>
  );
};

export default Home;

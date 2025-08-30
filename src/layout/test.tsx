import { AuroraBackground } from "@/components/magicui/aurora-background";
import { Meteors } from "@/components/magicui/meteors";
import { AuroraText } from "@/components/magicui/aurora-text";
import { ShinyButton } from "@/components/magicui/shiny-button";
import gsoc from "@/assets/images/gsoclogo.png";
import northeastern from "@/assets/images/northeastern.png";
import somaiya from "@/assets/images/somaiya.png";
import csi from "@/assets/images/csi.png";
import { Badge } from "@/components/ui/badge";

const skills = {
  Languages: ["C/C++", "TypeScript", "JavaScript", "Python"],
  Frameworks: ["React", "Express", "Node.js"],
  Styling: ["Tailwind CSS", "ShadCN", "CSS"],
  Databases: ["MongoDB", "MySQL", "Firebase"],
  Tools: ["Git", "Docker", "Vercel", "VS Code"],
  Other: ["Redux Toolkit", "Axios", "Postman", "REST APIs"],
};

const Home = () => {
  return (
    <AuroraBackground className="bg-black dark:bg-black">
      <div className="relative w-full min-h-screen overflow-hidden font-sans text-neutral-800 dark:text-foreground">
        {/* Darker meteors */}
        <Meteors className="absolute inset-0 z-0 pointer-events-none opacity-20" />

        {/* Extra dark overlay for stronger darkening */}
        <div className="absolute inset-0 bg-black/40 z-0"></div>

        <main className="relative z-10 px-8 py-16 pb-28 flex flex-col items-center">
          <div className="text-left space-y-12 max-w-3xl w-full leading-relaxed">
            {/* Hero */}
            <section className="flex flex-col space-y-2">
              <h1 className="text-6xl font-extrabold text-white">
                Hi,{" "}
                <AuroraText className="text-outline">
                  Ishwari Dhamdhere
                </AuroraText>{" "}
                here
              </h1>
              <p className="text-xl text-neutral-400">
                19 years old — building cool things and learning even cooler
                ones.
              </p>
            </section>

            {/* About */}
            <section className="space-y-2">
              <h2 className="text-2xl font-semibold tracking-tight">About</h2>
              <p className="text-neutral-300">
                I'm a self-taught developer who got started by experimenting and
                building things on the internet.
              </p>
              <p className="text-neutral-300">
                I enjoy working with clean design, functional UX, and efficient
                code. I gravitate towards fullstack development, open source,
                and products that solve real problems.
              </p>
              <p className="text-neutral-300">
                Right now, I’m contributing to GSoC @ Mifos and diving deeper
                into scalable frontend systems.
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
                        <p className="font-medium text-white">
                          Google Summer of Code @ Mifos Initiative
                        </p>
                        <p className="text-sm text-neutral-400">Contributor</p>
                      </div>
                    </div>
                    <ShinyButton className="px-4 py-1 text-xs rounded-full mt-1">
                      Know more
                    </ShinyButton>
                  </div>
                  <p className="text-sm text-neutral-500 mt-1">
                    May 2025 – Present
                  </p>
                </div>

                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-3">
                      <img
                        src={northeastern}
                        alt="Northeastern Logo"
                        className="h-12 w-auto object-contain"
                      />
                      <div>
                        <p className="font-medium text-white">
                          Somaiya Web Development Cell
                        </p>
                        <p className="text-sm text-neutral-400">
                          FullStack Developer
                        </p>
                      </div>
                    </div>
                    <ShinyButton className="px-4 py-1 text-xs rounded-full mt-1">
                      Know more
                    </ShinyButton>
                  </div>
                  <p className="text-sm text-neutral-500 mt-1">
                    Dec 2024 – Present
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
                      <p className="font-medium text-white">
                        Compute Society of India KJSCE
                      </p>
                      <p className="text-sm text-neutral-400">
                        Operations Team Member
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-neutral-500">
                    Aug 2024 – May 2025
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
                    src={northeastern}
                    alt="College Logo"
                    className="h-12 w-auto object-contain"
                  />
                  <div>
                    <p className="font-medium text-white">
                      K.J. Somaiya College of Engineering
                    </p>
                    <p className="text-sm text-neutral-400">
                      B.Tech in Computer Engineering
                    </p>
                  </div>
                </div>
                <p className="text-sm text-neutral-500 mt-1">2023 – Present</p>
              </div>
            </section>

            {/* Skills */}
            <section className="max-w-5xl mx-auto space-y-6 mt-12">
              <h2 className="text-2xl font-bold tracking-tight">Skills</h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {Object.entries(skills).map(([category, list]) => (
                  <div
                    key={category}
                    className="rounded-xl border border-neutral-700 p-4 bg-black/70 shadow-sm ring-1 ring-white/10 transition-all hover:scale-[1.02]"
                  >
                    <h3 className="text-lg font-semibold mb-3 text-white">
                      {category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {list.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="text-sm px-2 py-1 bg-neutral-800 text-white"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </AuroraBackground>
  );
};

export default Home;

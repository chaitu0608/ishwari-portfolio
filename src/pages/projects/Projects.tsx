import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Github } from "lucide-react";
import MifosHome from "@/assets/images/image.png";
import GbDashboard from "@/assets/project-images/GbDashboard.png";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Projects = () => {

  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Projects | Craig Rosario";
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);

  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-zinc-950">
      {/* Main content */}
      <main className="relative z-10 px-8 py-16 flex flex-col items-center">
        <div className="text-left space-y-12 max-w-3xl w-full leading-relaxed">
          {/* Hero Section */}
          <section className="flex flex-col space-y-2">
            <h1 className="text-6xl font-extrabold text-black dark:text-white">
              My Projects
            </h1>
            <p className="text-xl text-neutral-600 dark:text-muted-foreground">
              Check out the cool stuff I've built!
            </p>
          </section>

          {/* Project Content */}
          <section className="space-y-12 w-full">
            <div className="space-y-6 my-20">
              <h2 className="text-2xl font-semibold tracking-tight">
                Mifos X Web App
              </h2>
              <div className="flex justify-center">
                <CardContainer className="p-0 m-0">
                  <CardBody className="bg-gray-200 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[32rem] h-auto rounded-xl p-6 border">
                    <CardItem
                      translateZ="50"
                      className="text-xl font-bold text-neutral-600 dark:text-white"
                    >
                      Mifox X Web App
                    </CardItem>
                    <CardItem
                      as="div"
                      translateZ="60"
                      className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 flex flex-wrap gap-x-1 gap-y-1 font-medium"
                    >
                      <span >React</span>,
                      <span >TypeScript</span>,
                      <span >Tailwind CSS</span>,
                      <span >ShadCN</span>,
                      <span >Apache Fineract</span>
                    </CardItem>

                    <CardItem translateZ="100" className="w-full mt-4">
                      <img
                        src={MifosHome}
                        height="1000"
                        width="1000"
                        className="h-48 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                      />
                    </CardItem>
                    <div className="flex justify-between items-center mt-8">
                      <CardItem
                        translateZ={20}
                        as="a"
                        target="__blank"
                        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white cursor-pointer"
                        onClick={() => navigate('/projects/gsoc-project')}
                      >
                        More →
                      </CardItem>
                      <CardItem
                        translateZ={20}
                        as="button"
                        className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold cursor-pointer"
                        aria-label="GitHub Link"
                      >
                        <Github className="w-5 h-5" />
                        <a
                          href="https://github.com/Craig-Rosario/web-app-testing"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span>GitHub</span>
                        </a>
                      </CardItem>
                    </div>
                  </CardBody>
                </CardContainer>
              </div>
              <p className="text-neutral-700 dark:text-muted-foreground">
                This project is part of my GSoC work with Mifos, where I'm
                rebuilding their web app using React, TypeScript, and ShadCN. It
                focuses on creating reusable components, integrating with the
                Fineract API, and modernizing the overall UI/UX.
              </p>
            </div>

            <div className="space-y-6 my-20">
              <h2 className="text-2xl font-semibold tracking-tight">
                goBroke
              </h2>
              <div className="flex justify-center">
                <CardContainer className="p-0 m-0">
                  <CardBody className="bg-gray-200 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[32rem] h-auto rounded-xl p-6 border">
                    <CardItem
                      translateZ="50"
                      className="text-xl font-bold text-neutral-600 dark:text-white"
                    >
                      goBroke
                    </CardItem>
                    <CardItem
                      as="div"
                      translateZ="60"
                      className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 flex flex-wrap gap-x-1 gap-y-1 font-medium"
                    >
                      <span >JavaScript</span>,
                      <span >HTML/CSS</span>,
                      <span >PHP</span>,
                      <span >MySQL</span>
                    </CardItem>

                    <CardItem translateZ="100" className="w-full mt-4">
                      <img
                        src={GbDashboard}
                        height="1000"
                        width="1000"
                        className="h-48 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                      />
                    </CardItem>
                    <div className="flex justify-between items-center mt-8">
                      <CardItem
                        translateZ={20}
                        as="a"
                        target="__blank"
                        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white cursor-pointer"
                        onClick={() => navigate('/projects/gobroke-project')}
                      >
                        More →
                      </CardItem>
                      <CardItem
                        translateZ={20}
                        as="button"
                        className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold cursor-pointer"
                        aria-label="GitHub Link"
                      >
                        <Github className="w-5 h-5" />
                        <a
                          href="https://github.com/Craig-Rosario/WPL_B2_G6"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span>GitHub</span>
                        </a>
                      </CardItem>
                    </div>
                  </CardBody>
                </CardContainer>
              </div>
              <p className="text-neutral-700 dark:text-muted-foreground">
                goBroke is a simple budget management system that lets you add income, track expenses, monitor savings, and set reminders for upcoming bills.
                It helps you stay on top of your finances with smart summaries and a clean, intuitive UI.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Projects;

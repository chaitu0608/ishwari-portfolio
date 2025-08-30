import { useEffect, useState } from "react";
import MifosBanner from "@/assets/images/Banner.png";
import { useNavigate } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import MifosLogin from "@/assets/project-images/MifosLogin.png"
import MifosHome from "@/assets/project-images/MifosHome.png"
import MifosDashboard from "@/assets/project-images/MifosDashboard.png"
import MifosAcc from "@/assets/project-images/MifosAcc.png"
import { X } from "lucide-react";

const GSoCProject = () => {
  const navigate = useNavigate();
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    document.title = "Projects | Mifos X Web App";
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setFadeIn(true), 10);
    return () => clearTimeout(timer);
  }, []);
  

  return (
    
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      
      {/* Hero image */}
      <div
        className={`relative w-full h-[60vh] sm:h-[45vh] md:h-[70vh] lg:h-[75vh] transition-opacity duration-1000 ${
          fadeIn ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="relative w-full h-full">
          <img src={MifosBanner} alt="Banner" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 dark:to-black/80 z-10" />
        <div className="absolute top-0 left-0 w-full px-4 sm:px-6 py-4 flex justify-between items-center z-20">
          <span className="text-sm sm:text-lg font-medium" />
          <button
            onClick={() => navigate('/projects')}
            className="text-xl dark:text-white font-bold cursor-pointer text-white"
          >
            <X/>
          </button>
        </div>
      </div>

      {/* Main layout */}
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-[500px] bg-white dark:bg-black px-4 sm:px-6 py-6 md:py-8 border-b md:border-b-0 md:border-r border-black/10 dark:border-white/10 md:sticky md:top-0 md:h-screen z-10">
          <h2 className="text-3xl sm:text-4xl font-bold">Mifos X Web App</h2>
          <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 mt-2">
            Google Summer of Code 2025 project
          </p>
        </div>

        <div className="w-full md:flex-1 overflow-y-auto md:h-screen p-4 sm:p-6 space-y-8">
          <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
            Mifos X is a modern digital financial services platform enabling core banking,
            and inclusive fintech apps across the globe.
            <br />
            As a Google Summer of Code 2025 contributor, I migrated the legacy Angular app
            to a modern React-based frontend using ShadCN, Tailwind CSS, and TypeScript.
          </p>

          {/* Basic Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-neutral-600 dark:text-neutral-400">
            <div>
              <p className="uppercase text-xs mb-1">Role</p>
              <p className="text-black dark:text-white">Google Summer of Code contributor</p>
            </div>
            <div>
              <p className="uppercase text-xs mb-1">Source Code</p>
              <a
                href="https://github.com/Craig-Rosario/web-app-testing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-600 hover:underline break-words"
              >
                https://github.com/Craig-Rosario/web-app-testing
              </a>
            </div>
            <div>
              <p className="uppercase text-xs mb-1">Duration</p>
              <p className="text-black dark:text-white">May 2025 - Current</p>
            </div>
            <div>
              <p className="uppercase text-xs mb-1">Tools</p>
              <p className="text-black dark:text-white">
                React, TypeScript, Tailwind, ShadCN, Apache Fineract API
              </p>
            </div>
          </div>

          <Separator />

          {/* Overview */}
          <div>
            <h2 className="text-xl font-semibold">Project Overview</h2>
            <p className="text-neutral-700 dark:text-neutral-300 mt-2">
              This project involved migrating the legacy Angular UI of Mifos X to a modern, component-driven React frontend using ShadCN and Tailwind. The goal was to improve developer experience, ensure reusability, and modernize the interface.
            </p>
          </div>

          {/* Features */}
          <div>
            <h2 className="text-xl font-semibold">Key Features</h2>
            <ul className="list-disc pl-6 text-neutral-700 dark:text-neutral-300 space-y-2 mt-2">
              <li>Fully functional login and session flow</li>
              <li>CRUD pages: Admin, Organization, Products, Institution</li>
              <li>Integrated Fineract API using OpenAPI TypeScript client</li>
              <li>Created reusable components such as AppSelect, AppTable</li>
              <li>Responsive layout with clean UI and UX</li>
            </ul>
          </div>

          {/* Challenges */}
          <div>
            <h2 className="text-xl font-semibold">Challenges</h2>
            <ul className="list-disc pl-6 text-neutral-700 dark:text-neutral-300 space-y-2 mt-2">
              <li>Integrating OpenAPI even when it's incomplete and incorrect in places</li>
              <li>Preserving the UI design and the file structure with tech stack</li>
              <li>Building truly reusable components</li>
            </ul>
          </div>

          {/* Learnings */}
          <div>
            <h2 className="text-xl font-semibold">What I Learned</h2>
            <ul className="list-disc pl-6 text-neutral-700 dark:text-neutral-300 space-y-2 mt-2">
              <li>Modular frontend website with React, Typescript and Tailwind</li>
              <li>Apache Fineract OpenAPI-based backend integration</li>
              <li>Collaboration in open-source with mentors and reviewers</li>
            </ul>
          </div>

          {/* Showcase */}
          <div>
            <h2 className="text-xl font-semibold">Showcase</h2>
            <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 mt-4">
              <img src={MifosLogin} alt="Login Image" className="rounded border border-black/10 dark:border-white/10" />
              <img src={MifosHome} alt="Home Images" className="rounded border border-black/10 dark:border-white/10" />
              <img src={MifosDashboard} alt="Dashboard Page" className="rounded border border-black/10 dark:border-white/10" />
              <img src={MifosAcc} alt="Account Page" className="rounded border border-black/10 dark:border-white/10" />
            </div>
          </div>

          <div className="mt-15"></div>
        </div>
      </div>
    </div>
  );
};

export default GSoCProject;


"use client";

import { HomeIcon, MailIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

import { ModeToggle } from "@/components/mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Dock, DockIcon } from "@/components/magicui/dock";

// Icon props type
export type IconProps = React.HTMLAttributes<SVGElement>;

// Custom icons
const Icons = {
  linkedin: (props: IconProps) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <title>LinkedIn</title>
      <path
        fill="currentColor"
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 
        1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 
        1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 
        4.267 5.455v6.286zM5.337 7.433c-1.144 
        0-2.063-.926-2.063-2.065 0-1.138.92-2.063 
        2.063-2.063 1.14 0 2.064.925 
        2.064 2.063 0 1.139-.925 2.065-2.064 
        2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 
        0H1.771C.792 0 0 .774 0 
        1.729v20.542C0 23.227.792 24 
        1.771 24h20.451C23.2 24 24 
        23.227 24 22.271V1.729C24 
        .774 23.2 0 22.222 0h.003z"
      />
    </svg>
  ),
  resume: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <title>Resume</title>
      <path
        fill="currentColor"
        d="M6 2a2 2 0 0 0-2 2v16a2 
        2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6H6zm7 
        1.5L18.5 9H13V3.5zM8 12h8v1.5H8V12zm0 
        3h8v1.5H8V15z"
      />
    </svg>
  ),
};

export function DockDemo() {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <TooltipProvider>
        <Dock
          direction="middle"
          className="p-2 sm:p-3 rounded-full shadow-lg border-2 border-black/20 dark:border-white/20 hover:border-orange-300 dark:hover:border-orange-400 dark:hover:shadow-xl transition-all duration-500 ease-in-out"
        >
          {/* Home */}
          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  to="/"
                  aria-label="Home"
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12 rounded-full"
                  )}
                >
                  <HomeIcon className="size-4" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Home</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>

          {/* LinkedIn */}
          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="https://www.linkedin.com/in/ishwari-dhamdhere/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12 rounded-full"
                  )}
                >
                  <Icons.linkedin className="size-4" />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>LinkedIn</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>

          {/* Mail */}
          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="mailto:dhamdhere.i@northeastern.edu"
                  aria-label="Mail"
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12 rounded-full"
                  )}
                >
                  <MailIcon className="size-4" />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>Mail</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>

          {/* Resume */}
          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="/resume/Ishwari_Dhamdhere_CV.pdf" // Updated path to the resume file
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Resume"
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12 rounded-full"
                  )}
                >
                  <Icons.resume className="size-4" />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>Resume</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>

          <Separator orientation="vertical" className="h-full py-2" />

          {/* Theme Toggle */}
          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <ModeToggle className="rounded-full hover:text-orange-500 hover:border-orange-500 dark:hover:text-orange-500 dark:hover:border-orange-500" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Theme</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        </Dock>
      </TooltipProvider>
    </div>
  );
}

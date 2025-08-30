import React, { useEffect, useState } from "react";
import { AuroraBackground } from "@/components/magicui/aurora-background";
import { Meteors } from "@/components/magicui/meteors";
import { AuroraText } from "@/components/magicui/aurora-text";
import { ShinyButton } from "@/components/magicui/shiny-button";
import northeastern from "@/assets/images/northeastern.png";
import njcu from "@/assets/images/njcu.png";
import podimetrics from "@/assets/images/podimetrics.png";
import placeholderLogo from "@/assets/images/podimetrics.png"; // Placeholder logo (optional)
import lnt from "@/assets/images/lnt.png";
import { Badge } from "@/components/ui/badge";

function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    const handler = () => setMatches(media.matches);
    handler();
    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, [query]);

  return matches;
}

const Home = () => {
  const isMobile = useMediaQuery("(max-width: 639px)");
  const Wrapper: React.ElementType = isMobile ? "div" : AuroraBackground;
  const [showPodimetricsDetails, setShowPodimetricsDetails] = useState(false);
  const [showPodimetricsManagerDetails, setShowPodimetricsManagerDetails] =
    useState(false);
  const [showNjcuDetails, setShowNjcuDetails] = useState(false);
  const [showHealthcareDetails, setShowHealthcareDetails] = useState(false); // State for Healthcare Website details
  const [showLtDetails, setShowLtDetails] = useState(false); // State for L&T Hydrocarbon Engineering details

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
              <p className="text-lg font-serif text-blue-600 dark:text-blue-400">
                Boston, MA, USA
              </p>
            </section>

            {/* About */}
            <section className="space-y-2">
              <h2 className="text-2xl font-semibold tracking-tight">About</h2>
              <p className="text-neutral-700 dark:text-muted-foreground text-justify">
                I'm a Project Management professional pursuing my Master’s at
                Northeastern University. With certifications in CAPM, CSM, and
                CSPO, I bring a strong foundation in both Agile and Waterfall
                methodologies.
              </p>
              <p className="text-neutral-700 dark:text-muted-foreground text-justify">
                My approach to project management is grounded in methodical
                execution and clear communication—breaking down complex
                challenges into structured, actionable steps. I believe that
                collaboration, adaptability, and clarity are the keys to
                delivering meaningful results.
              </p>
              <p className="text-neutral-700 dark:text-muted-foreground text-justify">
                Through academic projects and professional experience, I’ve
                honed skills in project coordination, documentation, risk
                management, and stakeholder engagement, consistently driving
                efficiency and ensuring alignment across cross-functional teams.
              </p>
              <p className="text-neutral-700 dark:text-muted-foreground text-justify">
                I thrive on balancing proven practices with modern
                methodologies, blending the principles that stand the test of
                time with the innovation required today to deliver impactful
                outcomes.
              </p>
            </section>

            {/* Work Experience & Projects */}
            <section className="space-y-3">
              <h2 className="text-2xl font-semibold tracking-tight">
                Work Experience & Projects
              </h2>

              {/* Podimetrics - Process Improvement Initiative */}
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-3">
                      <img
                        src={podimetrics}
                        alt="Podimetrics logo"
                        className="h-12 w-auto object-contain"
                      />
                      <div>
                        <p className="font-medium">Podimetrics</p>
                        <p className="text-sm text-neutral-600 dark:text-muted-foreground text-justify">
                          Process Improvement Initiative
                          <br />
                          MA, USA
                        </p>
                      </div>
                    </div>
                    <ShinyButton
                      className="px-4 py-1 text-xs rounded-full mt-1"
                      onClick={() =>
                        setShowPodimetricsDetails(!showPodimetricsDetails)
                      }
                    >
                      {showPodimetricsDetails ? "Hide Details" : "Know More"}
                    </ShinyButton>
                  </div>
                  <p className="text-sm text-neutral-500 dark:text-muted-foreground mt-1">
                    Present
                  </p>
                </div>

                {/* Collapsible Section for Podimetrics */}
                {showPodimetricsDetails && (
                  <div className="space-y-4 mt-4 border-t border-neutral-200 dark:border-neutral-700 pt-4">
                    <h3 className="text-lg font-semibold text-neutral-800 dark:text-white">
                      Podimetrics, Process Improvement Initiative | MA, USA
                    </h3>
                    <ul className="list-disc pl-5 text-neutral-700 dark:text-muted-foreground text-justify">
                      <li>
                        Developed and standardized project management templates
                        such as charters, plans, stakeholder registers, RACI,
                        and communication plans to ensure consistency.
                      </li>
                      <li>
                        Defined requirements, estimates for scope, schedule,
                        budget, and risks, securing sponsor alignment and
                        approvals.
                      </li>
                      <li>
                        Monitored risk, budget, and resource plans, mitigating
                        10+ high-priority risks and reducing schedule delays by
                        20%.
                      </li>
                      <li>
                        Directed cross-functional teams, motivating members,
                        resolving conflicts, and ensuring adherence to
                        methodologies.
                      </li>
                      <li>
                        Delivered status reports and change management processes
                        to stakeholders, maintaining transparency and ensuring
                        project success.
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-3">
                      <img
                        src={podimetrics}
                        alt="Podimetrics logo"
                        className="h-12 w-auto object-contain"
                      />
                      <div>
                        <p className="font-medium">Podimetrics</p>
                        <p className="text-sm text-neutral-600 dark:text-muted-foreground text-justify">
                          Project Manager
                          <br />
                          MA, USA
                        </p>
                      </div>
                    </div>
                    <ShinyButton
                      className="px-4 py-1 text-xs rounded-full mt-1"
                      onClick={() =>
                        setShowPodimetricsManagerDetails(
                          !showPodimetricsManagerDetails
                        )
                      }
                    >
                      {showPodimetricsManagerDetails
                        ? "Hide Details"
                        : "Know More"}
                    </ShinyButton>
                  </div>
                  <p className="text-sm text-neutral-500 dark:text-muted-foreground mt-1">
                    Jan 2025 – Jun 2025
                  </p>
                </div>

                {/* Collapsible Section for Podimetrics */}
                {showPodimetricsManagerDetails && (
                  <div className="space-y-4 mt-4 border-t border-neutral-200 dark:border-neutral-700 pt-4">
                    <h3 className="text-lg font-semibold text-neutral-800 dark:text-white">
                      Podimetrics, Project Manager | MA, USA
                    </h3>
                    <ul className="list-disc pl-5 text-neutral-700 dark:text-muted-foreground text-justify">
                      <li>
                        Built and maintained integrated program/project
                        schedules, tracking milestones, deliverables,
                        dependencies, and deadlines from Alpha prototype through
                        Beta build for a $1M FDA Class I 510(k) medical device.
                      </li>
                      <li>
                        Directed cross-functional programs bridging engineering,
                        regulatory, operations, and compliance to deliver
                        digital health platforms on time and in scope.
                      </li>
                      <li>
                        Developed and maintained risk registers, mitigation
                        plans, and forecasting models, reducing timeline
                        overruns by 25% and improving schedule reliability.
                      </li>
                      <li>
                        Created a centralized project documentation hub,
                        standardizing onboarding, change control, and risk
                        tracking.
                      </li>
                      <li>
                        Partnered with program managers to improve resource
                        allocation and capacity planning and timely project
                        delivery.
                      </li>
                      <li>
                        Oversaw launch readiness and go-to-market activities for
                        software projects, collaborating with product,
                        operations, and marketing to drive adoption and reduce
                        post-launch escalations by 40%.
                      </li>
                      <li>
                        Ensured compliance with HIPAA, FDA, and internal QMS
                        standards via S3 artifact tracking, ETQ Reliance
                        workflows, and controlled document management.
                      </li>
                      <li>
                        Captured and resolved 20+ critical design action items
                        to support regulatory submissions, contributing to
                        successful Phase 2 closure and Phase 3 readiness.
                      </li>
                      <li>
                        Coordinated with vendors and subcontractors for
                        procurement, logistics, and testing activities, ensuring
                        timely delivery and execution.
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Healthcare Website Section */}
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-3">
                      <img
                        src={placeholderLogo} // Replace with actual logo when available
                        alt="Healthcare Website Logo"
                        className="h-12 w-auto object-contain"
                      />
                      <div>
                        <p className="font-medium">
                          Development of Home Healthcare Website on JIRA
                        </p>
                        <p className="text-sm text-neutral-600 dark:text-muted-foreground text-justify">
                          MA, USA
                        </p>
                      </div>
                    </div>
                    <ShinyButton
                      className="px-4 py-1 text-xs rounded-full mt-1"
                      onClick={() =>
                        setShowHealthcareDetails(!showHealthcareDetails)
                      }
                    >
                      {showHealthcareDetails ? "Hide Details" : "Know More"}
                    </ShinyButton>
                  </div>
                  <p className="text-sm text-neutral-500 dark:text-muted-foreground mt-1">
                    Sept 2023 – Dec 2023
                  </p>
                </div>

                {/* Collapsible Section for Healthcare Website */}
                {showHealthcareDetails && (
                  <div className="space-y-4 mt-4 border-t border-neutral-200 dark:border-neutral-700 pt-4">
                    <h3 className="text-lg font-semibold text-neutral-800 dark:text-white">
                      Development of Home Healthcare Website on JIRA | MA, USA
                    </h3>
                    <ul className="list-disc pl-5 text-neutral-700 dark:text-muted-foreground text-justify">
                      <li>
                        Collaborated with stakeholders to prioritize user
                        stories based on impact and urgency, ensuring that
                        critical features like patient scheduling and secure
                        data storage were delivered in early development
                        sprints.
                      </li>
                      <li>
                        Assisted in organizing and executing two-week sprints,
                        utilizing JIRA to manage backlog refinement, sprint
                        planning, daily stand-ups, resulting in a 20% increase
                        in team efficiency.
                      </li>
                      <li>
                        Supported the development and execution of testing
                        protocols, including system verification and user
                        validation, to ensure that the website met HIPAA
                        compliance and provided a seamless user experience.
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              {/* NJCU Section */}
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-3">
                      <img
                        src={njcu}
                        alt="College Logo"
                        className="h-12 w-auto object-contain"
                      />
                      <div>
                        <p className="font-medium">
                          NEW JERSEY CITY UNIVERSITY
                        </p>
                        <p className="text-sm text-neutral-600 dark:text-muted-foreground text-justify">
                          Project Assistant
                          <br />
                          NJ, USA
                        </p>
                      </div>
                    </div>
                    <ShinyButton
                      className="px-4 py-1 text-xs rounded-full mt-1"
                      onClick={() => setShowNjcuDetails(!showNjcuDetails)}
                    >
                      {showNjcuDetails ? "Hide Details" : "Know More"}
                    </ShinyButton>
                  </div>
                  <p className="text-sm text-neutral-500 dark:text-muted-foreground mt-1">
                    Jan 2023 – May 2023
                  </p>
                </div>

                {/* Collapsible Section for NJCU */}
                {showNjcuDetails && (
                  <div className="space-y-4 mt-4 border-t border-neutral-200 dark:border-neutral-700 pt-4">
                    <h3 className="text-lg font-semibold text-neutral-800 dark:text-white">
                      NEW JERSEY CITY UNIVERSITY, Project Assistant | NJ, USA
                    </h3>
                    <ul className="list-disc pl-5 text-neutral-700 dark:text-muted-foreground text-justify">
                      <li>
                        Coordinated with the admissions department to streamline
                        application processing workflows, reducing turnaround
                        time by 25% through improved task tracking and
                        stakeholder communication.
                      </li>
                      <li>
                        Implemented a prospective student feedback system with
                        services, achieving 92% completion boosting engagement.
                      </li>
                      <li>
                        Planned student onboarding orientations, driving a 15%
                        increase in on-time completion of required actions.
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              {/* L&T Hydrocarbon Engineering Section */}
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-3">
                      <img
                        src={lnt} // Replace with actual logo when available
                        alt="L&T Hydrocarbon Engineering Logo"
                        className="h-12 w-auto object-contain"
                      />
                      <div>
                        <p className="font-medium">
                          L&T Hydrocarbon Engineering Limited
                        </p>
                        <p className="text-sm text-neutral-600 dark:text-muted-foreground text-justify">
                          Project Assistant Intern
                          <br />
                          Mumbai, MH, India
                        </p>
                      </div>
                    </div>
                    <ShinyButton
                      className="px-4 py-1 text-xs rounded-full mt-1"
                      onClick={() => setShowLtDetails(!showLtDetails)}
                    >
                      {showLtDetails ? "Hide Details" : "Know More"}
                    </ShinyButton>
                  </div>
                  <p className="text-sm text-neutral-500 dark:text-muted-foreground mt-1">
                    Sept 2022 – Dec 2022
                  </p>
                </div>

                {/* Collapsible Section for L&T Hydrocarbon Engineering */}
                {showLtDetails && (
                  <div className="space-y-4 mt-4 border-t border-neutral-200 dark:border-neutral-700 pt-4">
                    <h3 className="text-lg font-semibold text-neutral-800 dark:text-white">
                      Project Assistant Intern | L&T Hydrocarbon Engineering
                      Limited | Mumbai, MH, India
                    </h3>
                    <ul className="list-disc pl-5 text-neutral-700 dark:text-muted-foreground text-justify">
                      <li>
                        Assisted in project documentation and coordination for
                        hydrocarbon engineering projects, ensuring timely
                        updates and compliance with internal standards.
                      </li>
                      <li>
                        Supported cross-functional teams in tracking project
                        milestones and deliverables, improving efficiency by
                        15%.
                      </li>
                      <li>
                        Conducted research and analysis to identify potential
                        risks and mitigation strategies for ongoing projects.
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </section>

            {/* Education */}
            <section className="space-y-2">
              <h2 className="text-2xl font-semibold tracking-tight">
                Education
              </h2>

              {/* NEU Section */}
              <div className="flex justify-between items-start">
                <div className="flex items-center space-x-3">
                  <img
                    src={northeastern} // Replace with NEU logo if available
                    alt="College Logo"
                    className="h-12 w-auto object-contain"
                  />
                  <div>
                    <p className="font-medium">
                      NORTHEASTERN UNIVERSITY (NEU) |<br /> Boston, United
                      States of America
                    </p>
                    <p className="text-sm text-neutral-600 dark:text-muted-foreground">
                      Masters of Science in Project Management <br />
                      (GPA- 3.8/4.0)
                    </p>
                  </div>
                </div>
                <p className="text-sm text-neutral-500 dark:text-muted-foreground mt-1">
                  Sept 2023 – Aug 2025
                </p>
              </div>

              {/* NJCU Section */}
              <div className="flex justify-between items-start">
                <div className="flex items-center space-x-3">
                  <img
                    src={njcu}
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

            {/* Skills and Interests */}
            <section className="max-w-5xl mx-auto space-y-6 mt-12">
              <h2 className="text-2xl font-bold tracking-tight">
                Skills & Interests
              </h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {/* Project & Program Management */}
                <div className="rounded-xl border border-neutral-200 dark:border-muted p-4 bg-white/80 dark:bg-background/50 shadow-sm ring-1 ring-black/5 dark:ring-white/10 transition-all hover:scale-[1.02]">
                  <h3 className="text-lg font-semibold mb-3">
                    Project & Program Management
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Strategic Planning",
                      "Program Governance",
                      "Cross-Functional Leadership",
                      "Risk & Issue Management",
                      "Road mapping",
                      "Portfolio Delivery",
                      "Negotiation",
                      "Adaptability",
                      "Problem-Solving",
                    ].map((skill) => (
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

                {/* Tools and Platforms */}
                <div className="rounded-xl border border-neutral-200 dark:border-muted p-4 bg-white/80 dark:bg-background/50 shadow-sm ring-1 ring-black/5 dark:ring-white/10 transition-all hover:scale-[1.02]">
                  <h3 className="text-lg font-semibold mb-3">
                    Tools And Platforms
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "MS Teams",
                      "Trello",
                      "JIRA",
                      "MS Project",
                      "MS Office",
                      "Excel",
                      "Kanban Board",
                      "Python",
                      "Google Smartsheet",
                      "Miro",
                      "Click Up",
                      "Primavera",
                      "Power BI",
                    ].map((tool) => (
                      <Badge
                        key={tool}
                        variant="secondary"
                        className="text-sm px-2 py-1"
                      >
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className="mt-16 space-y-4">
              <h2 className="text-2xl font-bold tracking-tight">Contact</h2>
              <p className="text-muted-foreground">
                If you'd like to reach out, just drop me an email or give me a
                call:
              </p>
              <p className="text-lg font-medium text-blue-500 hover:underline">
                <a href="mailto:dhamdhere.i@northeastern.edu">
                  dhamdhere.i@northeastern.edu
                </a>
              </p>
              <p className="text-lg font-medium text-blue-500 hover:underline">
                <a href="tel:+12016301092">+1 201-630-1092</a>
              </p>
            </section>
          </div>
        </main>
      </div>
    </Wrapper>
  );
};

export default Home;

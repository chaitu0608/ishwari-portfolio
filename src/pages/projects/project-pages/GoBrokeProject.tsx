import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

import GbBanner from "@/assets/images/GbBanner.png";
import GbLogin from "@/assets/project-images/GbLogin.png";
import GbDashboard from "@/assets/project-images/GbDashboard.png";
import GbIncome from "@/assets/project-images/GbIncome.png";
import GbExpenses from "@/assets/project-images/GbExpenses.png";
import GbReminders from "@/assets/project-images/GbReminders.png";
import { X } from "lucide-react";

const GoBrokeProject = () => {
    const navigate = useNavigate();
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        document.title = "Projects | goBroke";
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
        const timer = setTimeout(() => setFadeIn(true), 10);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
            {/* Hero image */}
            <div className={`relative w-full h-[60vh] sm:h-[45vh] md:h-[70vh] lg:h-[75vh] transition-opacity duration-1000 ${fadeIn ? "opacity-100" : "opacity-0"}`}>
                <div className="relative w-full h-[60vh] sm:h-[65vh] md:h-[70vh] lg:h-[75vh]">
                    <img src={GbBanner} alt="Banner" className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10" />
                <div className="absolute top-0 left-0 w-full px-4 sm:px-6 py-4 flex justify-between items-center z-20">
                    <span className="text-black dark:text-white text-sm sm:text-lg font-medium"></span>
                    <button
                        onClick={() => navigate('/projects')}
                        className="text-xl dark:text-white font-bold cursor-pointer text-white"
                    >
                        <X />
                    </button>
                </div>
            </div>

            {/* Main layout */}
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-[500px] bg-white dark:bg-black px-4 sm:px-6 py-6 md:py-8 border-b md:border-b-0 md:border-r border-black/10 dark:border-white/10 md:sticky md:top-0 md:h-screen z-10">
                    <h2 className="flex text-3xl sm:text-4xl font-bold">
                        <p className="text-red-500">go</p>
                        <p className="text-green-600 dark:text-green-400">Broke</p>
                    </h2>
                </div>

                <div className="w-full md:flex-1 overflow-y-auto md:h-screen p-4 sm:p-6 space-y-8">
                    <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
                        goBroke is a budget management system that enables an user to create manage their income and expenditure, keep a record of their savings and reminds them of the bills to be paid.
                    </p>

                    {/* Basic Info Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-neutral-600 dark:text-neutral-400">
                        <div>
                            <p className="uppercase text-xs mb-1">Source Code</p>
                            <a href="https://github.com/Craig-Rosario/WPL_B2_G6" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline break-words">
                                https://github.com/Craig-Rosario/WPL_B2_G6
                            </a>
                        </div>
                        <div>
                            <p className="uppercase text-xs mb-1">Tools</p>
                            <p className="text-black dark:text-white">JavaScript, HTML, CSS, PHP, MySQL</p>
                        </div>
                    </div>

                    <Separator />

                    <div>
                        <h2 className="text-xl font-semibold">Project Overview</h2>
                        <p className="text-neutral-700 dark:text-neutral-300 mt-2">
                            This project involved making the frontend using HTML CSS and JavaScript, PHP for the backend logic
                            and MySQL for the database management.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold">Key Features</h2>
                        <ul className="list-disc pl-6 text-neutral-700 dark:text-neutral-300 space-y-2 mt-2">
                            <li>Users can see their total savings</li>
                            <li>Ability to add income source and keep track of these sources</li>
                            <li>Ability to track expenditure</li>
                            <li>Users can set reminders for upcoming bills</li>
                            <li>Responsive layout with clean UI and UX</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold">Challenges</h2>
                        <ul className="list-disc pl-6 text-neutral-700 dark:text-neutral-300 space-y-2 mt-2">
                            <li>Integrating PHP backend with the frontend</li>
                            <li>User Authentication</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold">What I Learned</h2>
                        <ul className="list-disc pl-6 text-neutral-700 dark:text-neutral-300 space-y-2 mt-2">
                            <li>Integration of MySQL using XAMPP</li>
                            <li>Learning how PHP backend logic works</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold">Showcase</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 mt-4">
                            <img src={GbLogin} alt="Login Image" className="rounded border border-black/10 dark:border-white/10" />
                            <img src={GbDashboard} alt="Home Images" className="rounded border border-black/10 dark:border-white/10" />
                            <img src={GbIncome} alt="Dashboard Page" className="rounded border border-black/10 dark:border-white/10" />
                            <img src={GbExpenses} alt="Account Page" className="rounded border border-black/10 dark:border-white/10" />
                            <img src={GbReminders} alt="Account Page" className="rounded border border-black/10 dark:border-white/10" />
                        </div>
                    </div>

                    <div className="mt-15" />
                </div>
            </div>
        </div>
    );
};

export default GoBrokeProject;

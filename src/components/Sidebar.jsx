import { useState } from "react";
import {
    Home,
    User,
    Layers,
    Briefcase,
    Mail,
    Menu,
    X,
    Github,
    Linkedin,
    Twitter,
    Instagram,
} from "lucide-react";

export default function Sidebar() {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState("home");

    const navItems = [
        { id: "home", label: "Home", icon: Home },
        { id: "about", label: "About", icon: User },
        { id: "skills", label: "Skills", icon: Layers },
        { id: "projects", label: "Projects", icon: Briefcase },
        { id: "contact", label: "Contact", icon: Mail },
    ];

    return (
        <>
            {/* Mobile Toggle */}
            <button
                className="md:hidden fixed top-5 left-5 z-50 text-white bg-gradient-to-br from-[#1a120b] via-[#3b2a1f] to-[#1a120b] p-2 rounded-lg"
                onClick={() => setOpen(true)}
            >
                <Menu size={24} />
            </button>

            {/* Overlay */}
            {open && (
                <div
                    onClick={() => setOpen(false)}
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
                />
            )}

            {/* Sidebar */}
            <aside
                className={`fixed top-0 left-0 h-screen w-72 text-white p-6 transform transition-transform duration-300 z-50
        ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
            >
                {/* Close button */}
                <button
                    className="md:hidden absolute top-5 right-5"
                    onClick={() => setOpen(false)}
                >
                    <X />
                </button>

                {/* Profile Section */}
                <div className="flex flex-col items-center text-center">
                    <img
                        src="/Charu'spic.jpg"
                        alt="profile"
                        className="w-28 h-28 rounded-full border-2 border-white/30 shadow-lg object-cover"
                    />

                    <h1 className="text-2xl pl-2 font-bold tracking-wide">
                        Charumathi
                    </h1>
                    <p className="text-sm text-white/70">
                        Data Scientist
                    </p>

                    {/* 🔥 Social Icons Below Name */}
                    <div className="flex gap-4 mt-4">
                        <a
                            href="https://github.com/Charu-080602"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:scale-125 transition duration-300 hover:text-white"
                        >
                            <Github size={20} />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/charu-mahalingam"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:scale-125 transition duration-300 hover:text-blue-400"
                        >
                            <Linkedin size={20} />
                        </a>




                    </div>
                </div>

                {/* Navigation */}
                <nav className="mt-10 space-y-2">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        return (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                onClick={() => {
                                    setActive(item.id);
                                    setOpen(false);
                                }}
                                className={`flex items-center gap-3 p-3 rounded-xl transition
                ${active === item.id
                                        ? "bg-white/20 shadow-lg"
                                        : "hover:bg-white/10"
                                    }`}
                            >
                                <Icon size={18} />
                                <span>{item.label}</span>
                            </a>
                        );
                    })}
                </nav>
            </aside>
        </>
    );
}
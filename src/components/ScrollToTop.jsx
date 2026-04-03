import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShow(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            onClick={scrollTop}
            className={`fixed bottom-8 right-8 z-50 p-4 rounded-full 
      bg-linear-to-r from-purple-600 to-cyan-500
      shadow-lg shadow-cyan-500/30
      hover:scale-110 transition-all duration-300
      ${show ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
            <ArrowUp size={20} />
        </button>
    );
}
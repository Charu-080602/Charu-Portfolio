import { TypeAnimation } from "react-type-animation";

export default function Home() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-start overflow-hidden"
        >
            {/* Background Image */}
            <div className="absolute inset-0 -z-20">
                <img
                    src="/pic2.png"
                    alt="Charumathi"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60 -z-10"></div>

            {/* Neon Glow */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-[-120px] left-[-120px] w-[400px] h-[400px] bg-purple-600 rounded-full blur-[160px] opacity-20"></div>
                <div className="absolute bottom-[-150px] right-[-120px] w-[420px] h-[420px] bg-cyan-500 rounded-full blur-[160px] opacity-20"></div>
            </div>

            {/* Content */}
            <div className="max-w-4xl text-left space-y-2 px-12">
                <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">

                    <span className="bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
                        Charumathi
                    </span>
                </h1>

                {/* Typewriter Text */}
                {/* Typewriter Text */}
                <div className="text-2xl md:text-3xl font-semibold text-white flex items-center pl-2 pb-4 gap-2">
                    <span>I'm</span>

                    <TypeAnimation
                        sequence={[
                            "a Data Scientist",
                            2500,
                            "",
                            500,
                            "a Nutritionist",
                            2500,

                        ]}
                        wrapper="span"
                        speed={50}
                        deletionSpeed={50}
                        repeat={Infinity}
                    />
                </div>


                <div className="flex justify-start pr-2 mt-3 gap-6">
                    <a
                        href="#projects"
                        className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 hover:scale-105 transition text-white"
                    >
                        View Projects
                    </a>

                    <a
                        href="#contact"
                        className="px-6 py-3 rounded-xl border border-white/30 hover:bg-white/10 transition text-white"
                    >
                        Contact Me
                    </a>
                </div>
            </div>
        </section>
    );
}
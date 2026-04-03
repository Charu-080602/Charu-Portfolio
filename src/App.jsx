import Sidebar from "./components/Sidebar";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-gradient-to-br from-[#1a120b] via-[#3b2a1f] to-[#1a120b] min-h-screen text-black">
      <Sidebar />
      <main className="md:ml-72 space-y-32">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <ScrollToTop />
      </main>

    </div>
  );
}

export default App;

import { motion } from "framer-motion";
import { Cpu, Briefcase, BarChart3 } from "lucide-react";
import "./App.css";

function App() {

  const skills = [
    { name: "Python", percent: "90%" },
    { name: "SQL", percent: "85%" },
    { name: "Machine Learning", percent: "88%" },
    { name: "Deep Learning", percent: "80%" },
    { name: "Model Deployment", percent: "75%" },
    { name: "Neural Networks", percent: "82%" },
  ];

  return (
    <div className="app-container">

      {/* Background Blobs */}
      <div className="bg-blob purple"></div>
      <div className="bg-blob pink"></div>

      {/* Navbar */}
      <nav className="navbar">
        <h1 className="logo">
          
          Charumathi M
        </h1>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Data Scientist
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Data Scientist crafting intelligent ML solutions, building scalable
          data pipelines, and transforming raw data into meaningful insights.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          
          <a href="/CHARU'S RESUME.pdf" className="outline-btn">Download Resume</a>
        </motion.div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          I specialize in predictive modeling, data analytics, and building
          production-ready ML systems. My goal is to design elegant, efficient,
          and impactful AI solutions.
        </p>
      </section>

      {/* Experience */}
      <section id="experience" className="section">
        <h2>Experience</h2>

        <div className="glass-card">
          <div className="card-header">
            <Briefcase size={18} />
            <h3>Data Scientist</h3>
          </div>

          <p className="company">
            Highbrow Technologies | 2025 – Present
          </p>

          <ul>
            <li>Developed predictive ML models for business insights.</li>
            <li>Built scalable ETL pipelines.</li>
            <li>Designed stakeholder dashboards.</li>
            <li>Implemented AI-driven strategies.</li>
          </ul>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <h2>Selected Projects</h2>

        <div className="project-grid">
          {[
            "End-to-End Predictive Modeling Engine",
            "Customer Segmentation using ML Clustering",
          ].map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              className="glass-card"
            >
              <div className="card-header">
                <BarChart3 size={18} />
                <h3>{project}</h3>
              </div>

              <p>
                Built scalable ML workflows using Python & SQL to deliver
                measurable data-driven impact.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="section">
        <h2>Core Skills</h2>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="flip-card">
              <div className="flip-card-inner">

                {/* Front */}
                <div className="flip-card-front">
                  {skill.name}
                </div>

                {/* Back */}
                <div className="flip-card-back">
                  {skill.percent}
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section contact">
        <h2>Let’s Connect</h2>

        <div className="contact-buttons">
          <a href="https://github.com/Charu-080602/Charu-Mahalingam">Github</a>
          <a href="https://www.linkedin.com/in/charu-mahalingam/">LinkedIn</a>
        </div>

        <p className="footer">
          © {new Date().getFullYear()} Charumathi M
        </p>
      </section>

    </div>
  );
}

export default App;
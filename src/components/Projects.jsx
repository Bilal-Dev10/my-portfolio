
"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code2, ArrowUpRight } from "lucide-react";

const projects = [

  {
    name: "A Saddique",
    category: "Business Website",
    description:
      "A professional business website with modern design, product presentation and responsive layouts.",
    tech: ["Next.js", "React.js", "Tailwind CSS", "bcrypt", "Node.js", "MongoDB", "Mongoose", "JWT", "Cloudinary and REST APIs"],
    link: "https://www.asaddique.com",
  },

    {
    name: "Pizza Delivery Website",
    category: "Business Website",
    description:
      "Developed a complete Pizza Delivery Website using Next.js with a modern and responsive design. The project includes a customer website and a fully functional admin dashboard.",
    tech: ["Next.js", "React.js", "bcrypt", "Tailwind CSS", "Node.js", "MongoDB", "Mongoose", "JWT", "Cloudinary and REST APIs"],
    link: "https://pizzadeliverywebsite.vercel.app",
  },
  
  {
    name: "TopX Store",
    category: "E-commerce",
    description:
      "An online fashion store with product listings, shopping cart, authentication and order management.",
    tech: ["Next.js", "React.js", "Tailwind CSS", "Node.js", "bcrypt", "MongoDB", "Mongoose", "JWT", "Cloudinary and REST APIs"],
    link: "https://www.topxstore.com",
  },
  {
    name: "Star Route Logistics",
    category: "Business Website",
    description:
      "A logistics business website designed to present company services and provide a professional online presence.",
    tech: ["Next.js", "React", "CSS"],
    link: "https://starroutelogistics.com",
  },
  {
    name: "General Knowledge",
    category: "Web Application",
    description:
      "An interactive general knowledge website built to provide an easy way to explore knowledge topics.",
    tech: ["React", "JavaScript", "CSS"],
    link: "https://general-knowledge-wine.vercel.app/",
  },
  {
    name: "Lahore Book Hub",
    category: "Bookstore",
    description:
      "An online bookstore project for displaying books and building an easy shopping experience.",
    tech: ["Next.js", "MongoDB", "Cloudinary"],
    link: "https://lbh-revsc2fkm-muhammad-bilals-projects-6d1f1ac2.vercel.app",
  },
  {
    name: "Voting App",
    category: "Web Application",
    description:
      "My first development project, built to practice frontend development and interactive functionality.",
    tech: ["React", "JavaScript", "CSS"],
    link: "https://votin-app-front-end.vercel.app",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-line" />

        <h2 className="section-title">
          Featured <span>Projects</span>
        </h2>

        <p className="section-subtitle">
          Some of the websites and applications I have worked on.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.12 }}
              whileHover={{ y: -8 }}
              className="glass-card p-6 flex flex-col"
            >
              <div className="flex justify-between items-center mb-7">
                <div className="bg-[#34d399]/10 p-3 rounded-xl">
                  <Code2 className="text-[#34d399]" size={26} />
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Visit ${project.name}`}
                  className="text-gray-400 hover:text-[#34d399] transition"
                >
                  <ExternalLink size={22} />
                </a>
              </div>

              <p className="text-[#34d399] text-xs font-semibold uppercase tracking-widest">
                {project.category}
              </p>

              <h3 className="text-xl font-bold mt-2 mb-3">
                {project.name}
              </h3>

              <p className="text-gray-400 text-sm leading-7 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-6 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs text-gray-300 bg-[#0b0f0e] px-3 py-2 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between border-t border-[#26352d] pt-5 text-sm font-semibold hover:text-[#34d399] transition"
              >
                Live Preview
                <ArrowUpRight size={19} />
              </a>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/Bilal-Dev10"
            target="_blank"
            rel="noreferrer"
            className="outline-btn"
          >
            Visit My GitHub <Code2 size={19} />
          </a>
        </div>
      </div>
    </section>
  );
}

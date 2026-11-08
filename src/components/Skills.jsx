
"use client";

import { motion } from "framer-motion";

const skills = [
  {
    title: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript", "React.js", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "JWT Authentication", "bcrypt"],
  },
  {
    title: "Database & Tools",
    items: ["MongoDB", "Mongoose", "Cloudinary", "Git", "GitHub", "Postman"],
  },
  {
    title: "Other Skills",
    items: ["Responsive Design", "Framer Motion", "Context API", "Hooks", "Vercel"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section bg-[#101613]">
      <div className="container">
        <div className="section-line" />

        <h2 className="section-title">
          My <span>Skills</span>
        </h2>

        <p className="section-subtitle">
          Technologies and tools I use to build modern web applications.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              whileHover={{ y: -8 }}
              className="glass-card p-6"
            >
              <h3 className="text-xl font-bold text-[#34d399] mb-6">
                {skill.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm bg-[#0b0f0e] border border-[#26352d] text-gray-300 rounded-lg px-3 py-2 hover:border-[#34d399] hover:text-[#34d399] transition"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

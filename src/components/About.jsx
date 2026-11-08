
"use client";

import { motion } from "framer-motion";
import { Code2, GraduationCap, Laptop } from "lucide-react";

const details = [
  {
    icon: Code2,
    title: "Development",
    text: "Building modern websites and full-stack web applications.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    text: "BS Computer Science at Green International University, Lahore.",
  },
  {
    icon: Laptop,
    title: "Learning",
    text: "Always learning new technologies and improving my skills.",
  },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="section-line" />
          <h2 className="section-title">
            About <span>Me</span>
          </h2>

          <p className="section-subtitle">
            A little introduction about who I am and what I do.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mt-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <h3 className="text-2xl font-bold mb-5">
              I'm a <span className="green-text">Web Developer</span>
            </h3>

            <p className="text-gray-400 leading-8">
              My name is Muhammad Bilal. I am a Computer Science
              student and MERN Stack Developer. I enjoy creating
              beautiful and useful websites that solve real problems.
            </p>

            <p className="text-gray-400 leading-8 mt-5">
              I work with frontend and backend technologies, build
              REST APIs, connect databases, and create responsive
              user interfaces. My goal is to grow as a developer
              and gain real-world experience through practical projects.
            </p>

            <a href="#contact" className="primary-btn mt-7">
              Let's Work Together
            </a>
          </motion.div>

          <div className="space-y-5">
            {details.map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="glass-card p-6 flex gap-5 items-start"
                >
                  <div className="bg-[#34d399]/10 p-4 rounded-xl">
                    <Icon className="text-[#34d399]" size={27} />
                  </div>

                  <div>
                    <h3 className="font-bold text-xl mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 leading-7">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

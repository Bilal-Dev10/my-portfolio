
"use client";

import { motion } from "framer-motion";
import { GraduationCap, BriefcaseBusiness } from "lucide-react";

const timeline = [
  {
    icon: GraduationCap,
    type: "Education",
    title: "BS Computer Science",
    organization: "Green International University, Lahore",
    date: "2025 – Present",
    description:
      "Currently studying Computer Science and building knowledge in programming, software development and computer science fundamentals.",
  },
  {
    icon: BriefcaseBusiness,
    type: "Practical Experience",
    title: "MERN Stack Development",
    organization: "Personal & Live Projects",
    date: "Ongoing",
    description:
      "Developing full-stack web applications using React, Next.js, Node.js, MongoDB, REST APIs, authentication and Cloudinary.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section bg-[#101613]">
      <div className="container">
        <div className="section-line" />

        <h2 className="section-title">
          My <span>Journey</span>
        </h2>

        <p className="section-subtitle">
          My education and practical development journey.
        </p>

        <div className="max-w-3xl mt-14 space-y-7">
          {timeline.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="glass-card p-7 flex gap-5"
              >
                <div className="shrink-0 bg-[#34d399]/10 p-4 rounded-xl h-fit">
                  <Icon size={28} className="text-[#34d399]" />
                </div>

                <div>
                  <span className="text-[#34d399] text-sm font-semibold">
                    {item.type}
                  </span>

                  <h3 className="text-xl md:text-2xl font-bold mt-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-300 mt-2">
                    {item.organization}
                  </p>

                  <p className="text-gray-500 text-sm mt-2">
                    {item.date}
                  </p>

                  <p className="text-gray-400 leading-7 mt-4">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

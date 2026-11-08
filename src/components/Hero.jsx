
"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Terminal,
  Database,
} from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-28 pb-16 relative overflow-hidden"
    >
      <div className="absolute top-20 right-0 w-96 h-96 bg-emerald-500/10 blur-[130px] rounded-full" />

      <div className="container grid md:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 border border-[#26352d] bg-[#151d19] rounded-full px-4 py-2 mb-7">
            <span className=" animate-pulse w-2 h-2 bg-[#34d399] rounded-full " />
            <span className="text-sm text-gray-300">
              MERN Stack Developer
            </span>
          </div>

          <p className="text-gray-400 mb-3">
            Hello, I'm Muhammad Bilal
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
            Building
            <span className="block text-[#34d399]">
              Digital
            </span>
            Experiences.
          </h1>

          <p className="text-gray-400 text-lg leading-8 mt-7 max-w-xl">
            I develop modern, responsive and user-friendly web
            applications using React, Next.js, Node.js and MongoDB.
            I enjoy turning ideas into real digital products.
          </p>

          <div className="flex flex-wrap gap-4 mt-9">
            <a href="#projects" className="primary-btn">
              View Projects <ArrowUpRight size={19} />
            </a>

            <a href="#contact" className="outline-btn">
              Contact Me
            </a>
          </div>

          <div className="flex gap-5 mt-10">
            <a
              href="https://github.com/BilalUnknown10"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-gray-400 hover:text-[#34d399] transition"
            >
              <Code2 size={23} />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-[#34d399] transition"
            >
              <FaLinkedin size={23} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-[#34d399]/10 blur-[100px]" />

          <div className="glass-card p-7 md:p-10 relative">
            <div className="flex items-center gap-2 mb-8">
              <span className="w-3 h-3 bg-red-400 rounded-full" />
              <span className="w-3 h-3 bg-yellow-400 rounded-full" />
              <span className="w-3 h-3 bg-green-400 rounded-full" />
              <span className="text-gray-500 text-xs ml-3">
                developer.js
              </span>
            </div>

            <div className="space-y-5 font-mono text-sm md:text-base">
              <p className="text-purple-400">
                const <span className="text-white">developer</span> =
                {" {"}
              </p>

              <p className="pl-5 text-gray-400">
                name: <span className="text-[#34d399]">"Bilal"</span>,
              </p>

              <p className="pl-5 text-gray-400">
                role:{" "}
                <span className="text-[#34d399]">
                  "MERN Stack Developer"
                </span>,
              </p>

              <p className="pl-5 text-gray-400">
                skills: [
              </p>

              <p className="pl-10 text-[#34d399]">
                "React", "Next.js",
              </p>

              <p className="pl-10 text-[#34d399]">
                "Node.js", "MongoDB"
              </p>

              <p className="pl-5 text-gray-400">],</p>

              <p className="pl-5 text-gray-400">
                passion:{" "}
                <span className="text-[#34d399]">
                  "Building Web Apps"
                </span>
              </p>

              <p className="text-purple-400">{"};"}</p>
            </div>

            <div className="grid grid-cols-3 gap-3 mt-10">
              {[Code2, Terminal, Database].map((Icon, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -7 }}
                  className="bg-[#0b0f0e] border border-[#26352d] rounded-xl p-4 flex justify-center"
                >
                  <Icon className="text-[#34d399]" size={27} />
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute -top-5 -right-4 glass-card p-4 text-[#34d399]"
          >
            <Code2 size={27} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

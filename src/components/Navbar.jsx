
"use client";

import { useState } from "react";
import { Menu, X, Code2 } from "lucide-react";

const links = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Experience", "#experience"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0b0f0e]/90 backdrop-blur-xl border-b border-[#26352d]">
      <div className="container h-[75px] flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2">
          <Code2 size={28} className="text-[#34d399]" />
          <span className="text-xl font-bold">
            Bilal<span className="text-[#34d399]">.dev</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-7">
          {links.map(([name, href]) => (
            <a
              key={name}
              href={href}
              className="text-sm text-gray-400 hover:text-[#34d399] transition"
            >
              {name}
            </a>
          ))}
        </div>

        <a href="#contact" className="hidden md:block primary-btn">
          Let's Talk
        </a>

        <button
          className="md:hidden text-[#34d399]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X size={27} /> : <Menu size={27} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#111915] border-t border-[#26352d] p-5 flex flex-col gap-5">
          {links.map(([name, href]) => (
            <a
              key={name}
              href={href}
              onClick={() => setOpen(false)}
              className="text-gray-300 hover:text-[#34d399]"
            >
              {name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="primary-btn"
          >
            Let's Talk
          </a>
        </div>
      )}
    </nav>
  );
}

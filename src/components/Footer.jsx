"use client";
import { Code2, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

export default function Footer() {
   const [currentYear, setCurrentYear] = useState(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className=" py-12 border-t border-[#26352d] bg-[#080c0a]">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-5">
        <a href="#home" className="text-xl font-bold">
          Bilal<span className="text-[#34d399]">.dev</span>
        </a>

        <p className="text-gray-500 text-sm text-center">
          © {currentYear} Muhammad Bilal. All rights reserved.
        </p>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/BilalUnknown10"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-gray-400 hover:text-[#34d399]"
          >
            <Code2 size={21} />
          </a>

          <a
            href="#home"
            aria-label="Back to top"
            className="bg-[#34d399]/10 text-[#34d399] p-3 rounded-lg hover:bg-[#34d399] hover:text-black transition"
          >
            <ArrowUp size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}

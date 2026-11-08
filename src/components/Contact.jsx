
"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Code2,
  Send,
  MapPin,
} from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

const contacts = [
  {
    icon: Mail,
    title: "Email",
    value: "bilalunknown10@gmail.com",
    link: "mailto:bilalunknown10@gmail.com",
  },
  {
    icon: Phone,
    title: "Phone / WhatsApp",
    value: "03409342610",
    link: "https://wa.me/923409342610",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Lahore, Pakistan",
    link: null,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-line" />

        <h2 className="section-title">
          Let's Work <span>Together</span>
        </h2>

        <p className="section-subtitle">
          Have a project or opportunity? Feel free to contact me.
          I'm always interested in learning and working on new ideas.
        </p>

        <div className="grid md:grid-cols-2 gap-10 mt-14">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            {contacts.map((item) => {
              const Icon = item.icon;

              const content = (
                <div className="glass-card p-5 flex gap-5 items-center">
                  <div className="bg-[#34d399]/10 p-4 rounded-xl">
                    <Icon className="text-[#34d399]" size={25} />
                  </div>

                  <div>
                    <h3 className="font-bold">{item.title}</h3>
                    <p className="text-gray-400 text-sm mt-1">
                      {item.value}
                    </p>
                  </div>
                </div>
              );

              return item.link ? (
                <a key={item.title} href={item.link}>
                  {content}
                </a>
              ) : (
                <div key={item.title}>{content}</div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-7 md:p-9"
          >
            <h3 className="text-2xl font-bold mb-7">
              Send Me a Message
            </h3>

            <form
              action="https://formsubmit.co/bilalunknown10@gmail.com"
              method="POST"
              className="space-y-5"
            >
              <input
                type="hidden"
                name="_subject"
                value="New Portfolio Message"
              />

              <input
                type="hidden"
                name="_captcha"
                value="true"
              />

              <input
                type="text"
                name="_honey"
                className="hidden"
                tabIndex="-1"
                autoComplete="off"
              />

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full bg-[#0b0f0e] border border-[#26352d] rounded-lg p-4 outline-none focus:border-[#34d399] transition"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full bg-[#0b0f0e] border border-[#26352d] rounded-lg p-4 outline-none focus:border-[#34d399] transition"
              />

              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                required
                className="w-full bg-[#0b0f0e] border border-[#26352d] rounded-lg p-4 outline-none focus:border-[#34d399] transition resize-none"
              />

              <button type="submit" className="primary-btn w-full">
                Send Message <Send size={18} />
              </button>
            </form>

            <p className="text-xs text-gray-500 mt-4">
              Email delivery requires FormSubmit activation on your
              first submission.
            </p>

            <div className="flex gap-5 mt-8">
              <a
                href="https://github.com/BilalUnknown10"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="text-gray-400 hover:text-[#34d399]"
              >
                <Code2 size={23} />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-[#34d399]"
              >
                <FaLinkedin size={23} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

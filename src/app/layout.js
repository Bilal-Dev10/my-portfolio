
import "./globals.css";

export const metadata = {
  title: "Muhammad Bilal | MERN Stack Developer",
  description:
    "Muhammad Bilal is a MERN Stack Developer building modern, responsive and scalable web applications using React, Next.js, Node.js and MongoDB.",
  keywords: [
    "Muhammad Bilal",
    "MERN Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Web Developer Pakistan",
  ],
  authors: [{ name: "Muhammad Bilal" }],
  openGraph: {
    title: "Muhammad Bilal | MERN Stack Developer",
    description: "Building modern digital experiences.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

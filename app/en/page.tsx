import { NextPage } from "next";
import React from "react";

const socialLinks = [
  { name: "GitHub", url: "https://github.com/fasokh" },
  { name: "Instagram", url: "https://www.instagram.com/codechain.dev" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/fatemeh-sokhandan" },
];

const Page: NextPage = () => {
  return (
    <div
      className="min-h-screen bg-gray-100 text-gray-800 px-6 py-10 font-sans"
      dir="ltr"
    >
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-2">Fatemeh Sokhandan</h1>
        <p className="text-gray-600 mb-4">Front-End Developer</p>
        <a
          href="/resume_en.pdf"
          download
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition"
        >
          Download Resume
        </a>
      </div>

      <section className="mb-8 bg-white shadow-md rounded-2xl p-6">
        <h2 className="text-2xl font-semibold mb-3 border-b pb-2">About Me</h2>
        <p className="leading-8">
          I started learning front-end development self-taught in 2021 and have
          been focusing on React and Next.js. I’ve built several personal
          projects and I’m eager to collaborate with professional teams to build
          high-quality and user-focused web applications.
        </p>
      </section>

      <section className="mb-8 bg-white shadow-md rounded-2xl p-6">
        <h2 className="text-2xl font-semibold mb-3 border-b pb-2">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Next.js",
            "Tailwind CSS",
            "Chakra UI",
            "Postman",
            "Trello",
          ].map((skill) => (
            <span
              key={skill}
              className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="mb-8 bg-white shadow-md rounded-2xl p-6">
        <h2 className="text-2xl font-semibold mb-3 border-b pb-2">Education</h2>
        <div className="flex flex-wrap gap-2">
          {["IT Engineering", "Computer Networks System"].map((skill) => (
            <a
              key={skill}
              className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
            >
              {skill}
            </a>
          ))}
        </div>
      </section>

      <section className="mb-8 bg-white shadow-md rounded-2xl p-6">
        <h2 className="text-2xl font-semibold mb-3 border-b pb-2">
          Social Links
        </h2>
        <div className="flex flex-wrap gap-2">
          {socialLinks.map((skill) => (
            <a
              href={skill.url}
              key={skill.name}
              className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
            >
              {skill.name}
            </a>
          ))}
        </div>
      </section>

      <section className="mb-8 bg-white shadow-md rounded-2xl p-6">
        <h2 className="text-2xl font-semibold mb-3 border-b pb-2">Samples</h2>
        <div className="flex flex-col gap-8">
          <div>
            <h3 className="text-lg font-semibold">Online Shop</h3>
            <p className="mb-2">
              By online-shop you can buy the stuff of your need, increase and
              decrease them also there is a registration
            </p>
            <div className="flex gap-5">
              <a
                href="https://github.com/fasokh/online-shop"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                source code
              </a>
              <a
                href="https://online-shop-mu-ebon.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                visit
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Task Manager</h3>
            <p className="mb-2">
              This app allows you to add tasks through a form, schedule them,
              and then search, edit, or delete them.
            </p>
            <div className="flex gap-5">
              <a
                href="https://github.com/fasokh/Task-Manager"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                source code
              </a>
              <a
                href="https://task-manager-tawny-beta.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                visit
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Todo List</h3>
            <p className="mb-2">A schedule application by using Drag&Drop</p>
            <div className="flex gap-4">
              <a
                href="https://github.com/fasokh/Todo-List"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                source code
              </a>
              <a
                href="https://todo-list-phi-eight-89.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                visit
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Login System</h3>
            <p className="mb-2">A simple login system with dual language</p>
            <div className="flex gap-4">
              <a
                href="https://github.com/fasokh/LoginSystem"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                source code
              </a>
              <a
                href="https://login-system-omega-sooty.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                visit
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white shadow-md rounded-2xl p-6">
        <h2 className="text-2xl font-semibold mb-3 border-b pb-2">
          Contact Info
        </h2>
        <p>📞 +98 936 336 3326</p>
        <p>📧 fatemeh.sokhandan@gmail.com</p>
      </section>
      <footer>
        <span>
          <a href="/en">English </a>
        </span>
        |
        <span>
          <a href="/"> فارسی</a>
        </span>
      </footer>
    </div>
  );
};

export default Page;

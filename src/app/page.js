"use client";
import usenightMode from "./components/useNightMode";
import Image from "next/image";
import Link from "next/link";
import html from "../../public/images/icon-html.svg";
import css from "../../public/images/icon-css.svg";
import js from "../../public/images/icon-js.svg";
import accs from "../../public/images/icon-accessibility.svg";
import Nav from "./components/nav";
import { useState } from "react";

export default function Home() {
  const [theme, toggleTheme] = usenightMode();

  return (
    <div
      id="amiri"
      className={`h-[100vh] w-[100vw] flex flex-col justify-center items-center duration-200 ${
        theme === "light"
          ? `bg-[url('../../public/images/pattern-background-mobile-dark.svg')]`
          : `bg-[url('../../public/images/pattern-background-mobile-light.svg')]`
      } ${theme === "light" ? "bg-[#313E51]" : ""}`}
    >
      <Nav theme={theme} toggleTheme={toggleTheme} />
      <div
        id="back1"
        className={`flex flex-col gap-10 xl:gap-0 xl:flex-row w-full justify-center items-center xl:px-[14vw]`}
      >
        <section className="flex flex-col xl:h-[45vh] w-[90%] md:w-1/2">
          <h1
            className={`text-[#313E51] text-[10vw] md:text-[5vw] xl:text-[3vw] ${
              theme === "light" ? "text-white" : ""
            } `}
          >
            Welcome to the
          </h1>
          <h1
            className={`text-[#313E51] text-[10vw] md:text-[5.5vw] xl:text-[3.5vw] font-medium mb-5 ${
              theme === "light" ? "text-white" : ""
            } `}
          >
            Fronted Quiz!
          </h1>
          <i
            className={`text-[#626C7F] ${
              theme === "light" ? `text-[#ABC1E1]` : ""
            } `}
          >
            pick a subject to get started.
          </i>
        </section>
        <section className="flex flex-col h-[45vh] w-[90%] md:w-1/2 justify-between xl:pb-11">
          <Link
            href="html-tests"
            className={`hover:scale-[0.99] active:translate-y-[0.4rem] hover:border-[#ee545465] border-2 border-transparent duration-300 p-4 flex items-center gap-2 rounded-2xl text-[#313E51] text-[1.4vw] font-semibold ${
              theme === "light" ? `bg-[#3b4d66] text-white` : "bg-[white]"
            } `}
          >
            <Image
              className="p-[0.1rem] rounded-xl bg-[#ee545417] h-[2.5rem] w-[2.5rem]"
              src={html}
              alt="html"
            />
            <div className="mx-4 text-[1.3rem] sm:text-[3vw] md:text-[2vw] xl:text-[1.5vw]">
              HTML
            </div>
          </Link>
          <Link
            href="/css-tests"
            className={`hover:scale-[0.99] active:translate-y-[0.4rem] hover:border-[#56ff564f] border-2 border-transparent duration-300 p-4 flex items-center gap-2 rounded-2xl text-[#313E51] text-[1.4vw] font-semibold ${
              theme === "light" ? `bg-[#3b4d66] text-white` : "bg-[white]"
            } `}
          >
            <Image
              className="p-[0.1rem] rounded-xl bg-[#26d7811c] h-[2.5rem] w-[2.5rem]"
              src={css}
              alt="css"
            />
            <div className="mx-4 text-[1.3rem] sm:text-[3vw] md:text-[2vw] xl:text-[1.5vw]">
              CSS
            </div>
          </Link>
          <Link
            href="/javaScript-tests"
            className={`hover:scale-[0.99] active:translate-y-[0.4rem] hover:border-[#036cff98] border-2 border-transparent duration-300 p-4 flex items-center gap-2 rounded-2xl text-[#313E51] text-[1.4vw] font-semibold ${
              theme === "light" ? `bg-[#3b4d66] text-white` : "bg-[white]"
            } `}
          >
            <Image
              className="p-[0.1rem] rounded-xl bg-[#3b7cf521] h-[2.5rem] w-[2.5rem]"
              src={js}
              alt="js"
            />
            <div className="mx-4 text-[1.3rem] sm:text-[3vw] md:text-[2vw] xl:text-[1.5vw]">
              JavaScript
            </div>
          </Link>
          <Link
            href="/accessibility-tests"
            className={`hover:scale-[0.99] active:translate-y-[0.4rem] hover:border-[#a729f58e] border-2 border-transparent duration-300 p-4 flex items-center gap-2 rounded-2xl text-[#313E51] text-[1.4vw] font-semibold ${
              theme === "light" ? `bg-[#3b4d66] text-white` : "bg-[white]"
            } `}
          >
            <Image
              className="p-[0.1rem] rounded-xl bg-[#a729f525] h-[2.5rem] w-[2.5rem]"
              src={accs}
              alt="accs"
            />
            <div className="mx-4 text-[1.3rem] sm:text-[3vw] md:text-[2vw] xl:text-[1.5vw]">
              Accessibility
            </div>
          </Link>
        </section>
      </div>
    </div>
  );
}

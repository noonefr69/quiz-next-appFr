"use client";
import { useState } from "react";
import Nav from "../components/nav";
import Image from "next/image";

import html from "../../../public/images/icon-html.svg";
import css from "../../../public/images/icon-css.svg";
import js from "../../../public/images/icon-js.svg";
import accs from "../../../public/images/icon-accessibility.svg";
import Link from "next/link";
import usenightMode from "../components/useNightMode";

export default function HtmlPage() {
  const question = [
    {
      questionText: "What does HTML stand for?",
      answerOption: [
        {
          answerOptionText: "HyperText Markup Language",
          isCorrect: true,
          num: "A",
        },
        {
          answerOptionText: "HighText Machine Language",
          isCorrect: false,
          num: "B",
        },
        {
          answerOptionText: "Hyperlink and Text Markup Language",
          isCorrect: false,
          num: "C",
        },
        { answerOptionText: "None of the above", isCorrect: false, num: "D" },
      ],
    },
    {
      questionText: "Which tag is used to create a hyperlink?",
      answerOption: [
        { answerOptionText: "<a>", isCorrect: true, num: "A" },
        { answerOptionText: "<link>", isCorrect: false, num: "B" },
        { answerOptionText: "<href>", isCorrect: false, num: "C" },
        { answerOptionText: "<url>", isCorrect: false, num: "D" },
      ],
    },
    {
      questionText:
        "What is the correct HTML element for inserting a line break?",
      answerOption: [
        { answerOptionText: "<break>", isCorrect: false, num: "A" },
        { answerOptionText: "<br>", isCorrect: true, num: "B" },
        { answerOptionText: "<lb>", isCorrect: false, num: "C" },
        { answerOptionText: "<newline>", isCorrect: false, num: "D" },
      ],
    },
    {
      questionText:
        "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
      answerOption: [
        { answerOptionText: "src", isCorrect: false, num: "A" },
        { answerOptionText: "title", isCorrect: false, num: "B" },
        { answerOptionText: "longdesc", isCorrect: false, num: "C" },
        { answerOptionText: "alt", isCorrect: true, num: "D" },
      ],
    },
    {
      questionText: "What does the <head> element contain?",
      answerOption: [
        {
          answerOptionText: "The main content of the page",
          isCorrect: false,
          num: "A",
        },
        {
          answerOptionText: "Meta information about the document",
          isCorrect: true,
          num: "B",
        },
        {
          answerOptionText: "The footer information",
          isCorrect: false,
          num: "C",
        },
        {
          answerOptionText: "The navigation links",
          isCorrect: false,
          num: "D",
        },
      ],
    },
    {
      questionText: "Which tag is used to define an unordered list?",
      answerOption: [
        { answerOptionText: "<ol>", isCorrect: false, num: "A" },
        { answerOptionText: "<list>", isCorrect: false, num: "B" },
        { answerOptionText: "<ul>", isCorrect: true, num: "C" },
        { answerOptionText: "<li>", isCorrect: false, num: "D" },
      ],
    },
    {
      questionText: "Which HTML element defines the title of a document?",
      answerOption: [
        { answerOptionText: "<title>", isCorrect: true, num: "A" },
        { answerOptionText: "<header>", isCorrect: false, num: "B" },
        { answerOptionText: "<h1>", isCorrect: false, num: "C" },
        { answerOptionText: "<meta>", isCorrect: false, num: "D" },
      ],
    },
    {
      questionText: "What tag do you use to create a table in HTML?",
      answerOption: [
        { answerOptionText: "<table>", isCorrect: true, num: "A" },
        { answerOptionText: "<tab>", isCorrect: false, num: "B" },
        { answerOptionText: "<tr>", isCorrect: false, num: "C" },
        { answerOptionText: "<td>", isCorrect: false, num: "D" },
      ],
    },
    {
      questionText: "Which of the following elements are block-level elements?",
      answerOption: [
        { answerOptionText: "<span>", isCorrect: false, num: "A" },
        { answerOptionText: "<a>", isCorrect: false, num: "B" },
        { answerOptionText: "<img>", isCorrect: false, num: "C" },
        { answerOptionText: "<div>", isCorrect: true, num: "D" },
      ],
    },
    {
      questionText: "What is the purpose of the <form> tag in HTML?",
      answerOption: [
        {
          answerOptionText: "To define a section in a document",
          isCorrect: false,
          num: "A",
        },
        {
          answerOptionText: "To create a form for user input",
          isCorrect: true,
          num: "B",
        },
        {
          answerOptionText: "To create a hyperlink",
          isCorrect: false,
          num: "C",
        },
        { answerOptionText: "To insert an image", isCorrect: false, num: "D" },
      ],
    },
  ];

  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQus, setCurrentQus] = useState(0);
  const [theme, toggleTheme] = usenightMode();

  const handleAnswerOptionClick = (isCorrect) => {
    isCorrect ? setScore(score + 1) : "";

    const nextQuestion = currentQus + 1;

    setTimeout(() => {
      if (nextQuestion < question.length) {
        setCurrentQus(nextQuestion);
      } else {
        setShowScore(true);
      }
    }, 10);
  };

  return (
    <div>
      {showScore ? (
        <div
          id="amiri"
          className={`h-[100vh] w-[100vw] flex flex-col justify-center items-center ${
            theme === "light"
              ? `bg-[url('../../public/images/pattern-background-mobile-dark.svg')]`
              : `bg-[url('../../public/images/pattern-background-mobile-light.svg')]`
          } ${theme === "light" ? "bg-[#313E51]" : ""}`}
        >
          <Nav
            theme={theme}
            toggleTheme={toggleTheme}
            img={html}
            alt={"HTML-Icons"}
            title={"HTML"}
          />{" "}
          <div
            id="back1"
            className={`flex xl:flex-row flex-col w-full justify-center gap-10 items-center xl:px-[14vw]`}
          >
            <section className="flex flex-col xl:h-[45vh] w-[90%] text-center xl:w-1/2">
              <h1
                className={`text-[#313E51] text-[1.5rem] sm:text-[2.2rem] xl:text-[3.5vw] ${
                  theme === "light" ? "text-white" : ""
                } `}
              >
                Quiz completed
              </h1>
              <h1
                className={`xl:text-[4.5vw] text-[1.5rem] sm:text-[2.5rem] font-medium xl:mb-5 ${
                  theme === "light" ? "text-white" : "text-[#313E51]"
                } `}
              >
                You scored...
              </h1>
            </section>
            <section className="flex flex-col justify-between xl:gap-0 items-center h-[50vh] xl:h-[55vh] w-[90%] xl:w-1/2 ">
              <div
                className={`flex flex-col justify-center items-center h-[70%] w-[80%] rounded-2xl xl:mt-10 ${
                  theme === "light" ? `bg-[#314055]` : "bg-white"
                }`}
              >
                <div className="translate-y-6 gap-3 flex items-center justify-center">
                  <Image src={html} alt={"HTML"} />
                  <span
                    className={`font-bold text-xl ${
                      theme === "light" ? `text-white` : "text-[#313E51] "
                    }`}
                  >
                    HTML
                  </span>
                </div>
                <span
                  className={`text-[6rem] sm:text-[8rem] xl:text-[10vw] font-bold ${
                    theme === "light" ? "text-white" : "text-[#313E51]"
                  }`}
                >
                  {score}
                </span>
                <span className="xl:translate-y-[-1rem] text-[#626C7F] font-semibold">
                  out of 10
                </span>
              </div>
              <Link
                href="/"
                className="w-[80%] bg-[#A729F5] flex justify-center items-center p-4 rounded-2xl text-2xl text-white font-semibold duration-300 hover:opacity-70"
              >
                Play Again
              </Link>
            </section>
          </div>
        </div>
      ) : (
        <>
          <div
            id="amiri"
            className={`h-[100vh] w-[100vw] flex flex-col justify-center items-center ${
              theme === "light"
                ? `bg-[url('../../public/images/pattern-background-mobile-dark.svg')]`
                : `bg-[url('../../public/images/pattern-background-mobile-light.svg')]`
            } ${theme === "light" ? "bg-[#313E51]" : ""}`}
          >
            <Nav
              theme={theme}
              toggleTheme={toggleTheme}
              img={html}
              alt={"HTML-Icons"}
              title={"HTML"}
            />
            <div
              id="back1"
              className={`flex flex-col gap-10 xl:gap-0 xl:flex-row w-full justify-center items-center xl:px-[14vw]`}
            >
              <section className="flex flex-col xl:h-[45vh] w-[90%] xl:w-1/2">
                <i
                  className={`text-[#626C7F] ${
                    theme === "light" ? `text-[#ABC1E1]` : ""
                  } `}
                >
                  Question {currentQus + 1} of 10
                </i>
                <span
                  className={`text-[#313E51] font-semibold text-4xl mt-7 pr-4 ${
                    theme === "light" ? `text-white` : ""
                  } `}
                >
                  {question[currentQus].questionText}
                </span>
                <div className="xl:w-[85%] h-3 bg-slate-200 rounded-xl mt-[2.5rem] xl:mt-[14rem] flex items-center">
                  <div
                    className={`bg-[#A729F5] h-2 z-30 rounded-xl m-[0.2rem] duration-300 ${
                      currentQus === 1
                        ? `w-[11%]`
                        : currentQus === 2
                        ? `w-[20%]`
                        : currentQus === 3
                        ? `w-[30%]`
                        : currentQus === 4
                        ? `w-[40%]`
                        : currentQus === 5
                        ? `w-[50%]`
                        : currentQus === 6
                        ? `w-[60%]`
                        : currentQus === 7
                        ? `w-[70%]`
                        : currentQus === 8
                        ? `w-[80%]`
                        : currentQus === 9
                        ? `w-[90%]`
                        : currentQus === 10
                        ? `w-full`
                        : ""
                    }`}
                  ></div>
                </div>
              </section>
              <section className="flex flex-col h-[45vh] w-[90%] xl:w-1/2 justify-between sm:pb-11">
                {question[currentQus].answerOption.map((answerOptio, index) => (
                  <>
                    <div
                      id="test"
                      className={`hover:scale-[0.99] duration-300 hover:bg-[#ffffff96] active:translate-y-[0.4rem] hover:border-green-300 border-2 border-transparent gap-2 rounded-2xl flex items-center text-[#313E51] text-[1.3rem] xl:text-[1.4vw] font-semibold ${
                        theme === "light"
                          ? `bg-[#3b4d66] text-white`
                          : "bg-[white]"
                      } `}
                    >
                      <button
                        className="h-full w-full p-4 flex "
                        onClick={() =>
                          handleAnswerOptionClick(answerOptio.isCorrect)
                        }
                      >
                        <div className="text-[#626C7F] bg-[#626c7f13] h-5 w-5 p-4 mr-5 rounded-lg flex justify-center items-center">
                          {answerOptio.num}
                        </div>
                        {answerOptio.answerOptionText}
                      </button>
                    </div>
                  </>
                ))}
              </section>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

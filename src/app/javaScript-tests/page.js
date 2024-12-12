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
      questionText: "What does 'var' stand for in JavaScript?",
      answerOption: [
        {
          answerOptionText: "Variable",
          isCorrect: true,
          num: "A",
        },
        {
          answerOptionText: "Variation",
          isCorrect: false,
          num: "B",
        },
        {
          answerOptionText: "Variant",
          isCorrect: false,
          num: "C",
        },
        { answerOptionText: "Validator", isCorrect: false, num: "D" },
      ],
    },
    {
      questionText: "Which keyword is used to define a constant in JavaScript?",
      answerOption: [
        { answerOptionText: "var", isCorrect: false, num: "A" },
        { answerOptionText: "const", isCorrect: true, num: "B" },
        { answerOptionText: "let", isCorrect: false, num: "C" },
        { answerOptionText: "constant", isCorrect: false, num: "D" },
      ],
    },
    {
      questionText:
        "Which method is used to log messages to the console in JavaScript?",
      answerOption: [
        { answerOptionText: "log.console()", isCorrect: false, num: "A" },
        { answerOptionText: "console.log()", isCorrect: true, num: "B" },
        { answerOptionText: "print()", isCorrect: false, num: "C" },
        { answerOptionText: "message.log()", isCorrect: false, num: "D" },
      ],
    },
    {
      questionText:
        "Which JavaScript data type is used to store true or false values?",
      answerOption: [
        { answerOptionText: "String", isCorrect: false, num: "A" },
        { answerOptionText: "Boolean", isCorrect: true, num: "B" },
        { answerOptionText: "Number", isCorrect: false, num: "C" },
        { answerOptionText: "Object", isCorrect: false, num: "D" },
      ],
    },
    {
      questionText: "How do you write a function in JavaScript?",
      answerOption: [
        {
          answerOptionText: "function myFunction() {}",
          isCorrect: true,
          num: "A",
        },
        {
          answerOptionText: "def myFunction() {}",
          isCorrect: false,
          num: "B",
        },
        {
          answerOptionText: "function:myFunction() {}",
          isCorrect: false,
          num: "C",
        },
        {
          answerOptionText: "function = myFunction() {}",
          isCorrect: false,
          num: "D",
        },
      ],
    },
    {
      questionText:
        "Which operator is used for strict equality comparison in JavaScript?",
      answerOption: [
        { answerOptionText: "=", isCorrect: false, num: "A" },
        { answerOptionText: "==", isCorrect: false, num: "B" },
        { answerOptionText: "===", isCorrect: true, num: "C" },
        { answerOptionText: "!==", isCorrect: false, num: "D" },
      ],
    },
    {
      questionText:
        "Which built-in method is used to convert a string to an integer in JavaScript?",
      answerOption: [
        { answerOptionText: "Number()", isCorrect: false, num: "A" },
        { answerOptionText: "parseInt()", isCorrect: true, num: "B" },
        { answerOptionText: "toInteger()", isCorrect: false, num: "C" },
        { answerOptionText: "convertInt()", isCorrect: false, num: "D" },
      ],
    },
    {
      questionText: "What is the result of 'typeof null' in JavaScript?",
      answerOption: [
        { answerOptionText: "object", isCorrect: true, num: "A" },
        { answerOptionText: "null", isCorrect: false, num: "B" },
        { answerOptionText: "undefined", isCorrect: false, num: "C" },
        { answerOptionText: "string", isCorrect: false, num: "D" },
      ],
    },
    {
      questionText:
        "Which keyword is used to create an asynchronous function in JavaScript?",
      answerOption: [
        { answerOptionText: "async", isCorrect: true, num: "A" },
        { answerOptionText: "await", isCorrect: false, num: "B" },
        { answerOptionText: "defer", isCorrect: false, num: "C" },
        { answerOptionText: "setTimeout", isCorrect: false, num: "D" },
      ],
    },
    {
      questionText: "What will '2' + 3 + 4 evaluate to in JavaScript?",
      answerOption: [
        {
          answerOptionText: "234",
          isCorrect: true,
          num: "A",
        },
        {
          answerOptionText: "9",
          isCorrect: false,
          num: "B",
        },
        {
          answerOptionText: "7",
          isCorrect: false,
          num: "C",
        },
        {
          answerOptionText: "undefined",
          isCorrect: false,
          num: "D",
        },
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
            img={js}
            alt={"JS-Icons"}
            title={"JavaScript"}
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
                  <Image src={js} alt={"Js"} />
                  <span
                    className={`font-bold text-xl ${
                      theme === "light" ? `text-white` : "text-[#313E51] "
                    }`}
                  >
                    JavaScript
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
              img={js}
              alt={"JS-Icons"}
              title={"JavaScript"}
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

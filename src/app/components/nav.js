"use client";
import Image from "next/image";
import sunLight from "../../../public/images/icon-sun-light.svg";
import sunDark from "../../../public/images/icon-sun-dark.svg";
import moonLight from "../../../public/images/icon-moon-light.svg";
import moonDark from "../../../public/images/icon-moon-dark.svg";

export default function Nav(props) {
  return (
    <nav className="flex items-center justify-between h-[1em] w-[90%] xl:w-[80vw] p-4 mb-12 md:scale-[1]">
      <div className="flex justify-center items-center gap-4">
        <Image src={props.img} alt={props.alt} />{" "}
        <span
          className={`text-xl font-semibold text-[#313E51] ${
            props.theme === "light" ? `text-white` : ""
          }`}
        >
          {props.title}
        </span>{" "}
      </div>
      <div className="flex gap-2">
        <Image src={props.theme === "light" ? sunLight : sunDark} alt="sun" />
        <button
          onClick={props.toggleTheme}
          className="hover:opacity-70 duration-300 w-[2.8rem] h-[1.5rem] bg-purple-700 rounded-2xl relative"
        >
          <span
            className={`duration-300 w-[1.1rem] h-[1.1rem] rounded-full bg-white absolute top-[0.22rem] left-[0.3rem] ${
              props.theme === "light" ? `left-[1.4rem]` : ``
            }`}
          ></span>
        </button>
        <Image
          src={props.theme === "light" ? moonLight : moonDark}
          alt="moon"
        />
      </div>
    </nav>
  );
}

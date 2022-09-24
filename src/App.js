import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [q3, setQ3] = useState(true);
  const [q4, setQ4] = useState(true);
  const [q1, setQ1] = useState(true);
  const [q2, setQ2] = useState(true);

  const showanswer = (e) => {
    if (e.target.id === "q1") {
      setQ1(!q1);
      setQ2(true);
      setQ3(true);
      setQ4(true);
    } else if (e.target.id === "q2") {
      setQ2(!q2);
      setQ1(true);
      setQ3(true);
      setQ4(true);
    } else if (e.target.id === "q3") {
      setQ3(!q3);
      setQ1(true);
      setQ2(true);
      setQ4(true);
    } else if (e.target.id === "q4") {
      setQ4(!q4);
      setQ1(true);
      setQ2(true);
      setQ3(true);
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#000",
        backgroundImage: "url('./background.png')",
      }}
      className="h-screen flex justify-center items-center"
    >
      <div className="container">
        <div className="accordion">
          <div
            className="accordion-item flex flex-col items-start"
            id="question1"
          >
            <div className="flex flex-col items-center ">
              <a
                className="accordion-link w-fit"
                style={{ display: "flex", flexDirection: "Column" }}
                href="#question1"
                id="q1"
                onClick={(e) => {
                  console.log(e.target.id);
                  showanswer(e);
                }}
              >
                Which is correct FAQ or FAQs?
              </a>

              <img
                src={q1 ? "/offstate.svg" : "/onstate.svg"}
                alt=""
                id="q1"
                onClick={(e) => {
                  console.log(e.target.id);
                  showanswer(e);
                }}
                className="w-8 h-8"
                style={{ cursor: "pointer" }}
              />
            </div>
            <div
              className="w-80 text-center text-[#00FFFF] "
              style={{
                display: q1 ? "none" : "block",
              }}
            >
              <p>
                A frequently asked questions (FAQ) list is often used in
                articles, websites, email lists, and online forums where common
                questions tend to recursor: "pointer", ...
              </p>
            </div>
          </div>
          <div
            className="accordion-item flex flex-col items-end"
            id="question2"
          >
            <div className="flex flex-col items-center ">
              <a
                className="accordion-link w-fit"
                style={{ display: "flex", flexDirection: "Column" }}
                href="#question2"
                id="q2"
                onClick={(e) => {
                  console.log(e.target.id);
                  showanswer(e);
                }}
              >
                Which is correct FAQ or FAQs?
              </a>

              <img
                src={q2 ? "/offstate.svg" : "/onstate.svg"}
                alt=""
                id="q2"
                onClick={(e) => {
                  console.log(e.target.id);
                  showanswer(e);
                }}
                className="w-8 h-8"
                style={{ cursor: "pointer" }}
              />
            </div>
            <div
              className="w-80 text-center text-[#00FFFF] "
              style={{
                display: q2 ? "none" : "block",
              }}
            >
              <p>
                A frequently asked questions (FAQ) list is often used in
                articles, websites, email lists, and online forums where common
                questions tend to recursor: "pointer", ...
              </p>
            </div>
          </div>

          <div
            className="accordion-item flex flex-col items-start"
            id="question3"
          >
            <div className="flex flex-col items-center ">
              <a
                className="accordion-link w-fit"
                style={{ display: "flex", flexDirection: "Column" }}
                href="#question3"
                id="q3"
                onClick={(e) => {
                  console.log(e.target.id);
                  showanswer(e);
                }}
              >
                Which is correct FAQ or FAQs?
              </a>

              <img
                src={q3 ? "/offstate.svg" : "/onstate.svg"}
                alt=""
                id="q3"
                onClick={(e) => {
                  console.log(e.target.id);
                  showanswer(e);
                }}
                className="w-8 h-8"
                style={{ cursor: "pointer" }}
              />
            </div>
            <div
              className="w-80 text-center text-[#00FFFF] "
              style={{
                display: q3 ? "none" : "block",
              }}
            >
              <p>
                A frequently asked questions (FAQ) list is often used in
                articles, websites, email lists, and online forums where common
                questions tend to recursor: "pointer", ...
              </p>
            </div>
          </div>

          <div
            className="accordion-item flex flex-col items-end"
            id="question4"
          >
            <div className="flex flex-col items-center ">
              <a
                className="accordion-link w-fit"
                style={{ display: "flex", flexDirection: "Column" }}
                href="#question4"
                id="q4"
                onClick={(e) => {
                  console.log(e.target.id);
                  showanswer(e);
                }}
              >
                Which is correct FAQ or FAQs?
              </a>

              <img
                src={q4 ? "/offstate.svg" : "/onstate.svg"}
                alt=""
                id="q4"
                onClick={(e) => {
                  console.log(e.target.id);
                  showanswer(e);
                }}
                className="w-8 h-8"
                style={{ cursor: "pointer" }}
              />
            </div>
            <div
              className="w-80 text-center text-[#00FFFF] "
              style={{
                display: q4 ? "none" : "block",
              }}
            >
              <p>
                A frequently asked questions (FAQ) list is often used in
                articles, websites, email lists, and online forums where common
                questions tend to recursor: "pointer", ...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

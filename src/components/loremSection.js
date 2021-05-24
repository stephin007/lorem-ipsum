import React, { useEffect, useState } from "react";
import styled from "styled-components";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import "../darkStyles/DarkStyles.css";

const ThemeIcons = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 30px;
`;

function LoremSection() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  const [type, setType] = useState("hipster-latin");
  const [dark, setDark] = useState("");

  const switchLight = (theme) => {
    localStorage.setItem("theme", theme);
    setDark(theme);
  };

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    setDark(theme);
  }, []);

  console.log(dark);

  const handleSubmit = async (e) => {
    // starts showing loading gif once submit is clicked
    const url = `https://hipsum.co/api/?type=${type}&paras=50`;
    e.preventDefault();
    //if you console.log the count you will see that count is a string not a number, its not necessary but its a
    // good practice to convert string to number if you are working with number
    let amount = parseInt(count);

    const response = await fetch(url);
    const newTexts = await response.json();
    console.log(newTexts);

    //condition if count becomes zero or goes below zero, it will show atleast one paragraph
    if (count <= 0) {
      amount = 1;
    }
    //as soon as the text data is ready, turn off the loading GIF
    setText(newTexts.slice(0, amount));

    //condition if count goes above the total length of the data, it will show all the paragraphs inside your array
    if (count > text.length) {
      amount = text.length;
    }
  };

  return (
    <React.Fragment>
      {dark === "dark" ? (
        <div className="app__dark">
          <ThemeIcons>
            <WbSunnyIcon
              fontSize="large"
              style={{ cursor: "pointer", color: "white" }}
              onClick={() => switchLight("light")}
            />
          </ThemeIcons>
          <section
            id="lorem-section"
            className="section-center"
            style={{ marginTop: -30 }}
          >
            <h3 style={{ color: "#1eae98", fontSize: "25px" }}>
              tired of lorem ipsum
            </h3>
            <form
              className="lorem-form"
              onSubmit={handleSubmit}
              style={{ marginTop: 10 }}
            >
              <label
                htmlFor="amount"
                className="lorem-type"
                style={{ color: "#233e8b" }}
              >
                paragraphs:
              </label>
              <input
                type="number"
                name="amount"
                id="amount"
                value={count}
                onChange={(e) => setCount(e.target.value)}
              />
              <label
                htmlFor="type"
                className="lorem-type"
                style={{ color: "#233e8b" }}
              >
                Choose a version:
              </label>
              <select
                name="types"
                id="types"
                onChange={(e) => setType(e.target.value)}
              >
                <option value="hipster-latin">Hipster Speak Only </option>
                <option value="hipster-centric">
                  Hipster Speak with Latin
                </option>
              </select>
              <button
                className="btn"
                style={{ background: "#867ae9", fontWeight: 500 }}
              >
                generate
              </button>
            </form>
            <article className="lorem-text">
              {text.map((item, index) => {
                return (
                  <p key={index} style={{ color: "#a9f1df" }}>
                    {item}
                  </p>
                );
              })}
            </article>
          </section>
        </div>
      ) : (
        <div className="app__light">
          <ThemeIcons>
            <Brightness2Icon
              fontSize="large"
              style={{ cursor: "pointer" }}
              onClick={() => {
                switchLight("dark");
              }}
            />
          </ThemeIcons>
          <section
            id="lorem-section"
            className="section-center"
            style={{ marginTop: -30 }}
          >
            <h3 style={{ fontSize: "25px" }}>tired of lorem ipsum</h3>
            <form
              className="lorem-form"
              onSubmit={handleSubmit}
              style={{ marginTop: 10 }}
            >
              <label htmlFor="amount" className="lorem-type">
                paragraphs:
              </label>
              <input
                type="number"
                name="amount"
                id="amount"
                value={count}
                onChange={(e) => setCount(e.target.value)}
              />
              <label htmlFor="type" className="lorem-type">
                Choose a version:
              </label>
              <select
                name="types"
                id="types"
                onChange={(e) => setType(e.target.value)}
              >
                <option value="hipster-latin">Hipster Speak Only </option>
                <option value="hipster-centric">
                  Hipster Speak with Latin
                </option>
              </select>
              <button className="btn">generate</button>
            </form>
            <article className="lorem-text">
              {text.map((item, index) => {
                return <p key={index}>{item}</p>;
              })}
            </article>
          </section>
        </div>
      )}
    </React.Fragment>
  );
}

export default LoremSection;

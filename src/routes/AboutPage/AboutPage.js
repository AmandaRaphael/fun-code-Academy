import React from "react";
import styles from "./About.module.css";
import { useEffect, useState, useRef, useContext } from "react";

import MyContext from "../../context/MyContext";
import AboutPageSearch from "./AboutPageSearch";
const AboutPage = () => {
  const { inputRef, searchInput, submitHandler, inputValue, setInputValue } =
    useContext(MyContext);

  useEffect(() => {
    inputRef.current.focus();
    inputRef.current.style.fontSize = "20px";
  }, []);

  return (
    <div className={styles.about}>
      <div className={styles.aboutData}>
        <h2>About Us</h2>
        <li>
          We provide Proven & immersive courses that can be customized to your
          programming needs.{" "}
        </li>
        <li>
          We build the necessary skills and confidence on your journey towards a
          software developer
        </li>
        <li>We have teachers specially trained for our children`s course</li>
        <h2>Find our Offline courses in your city below.</h2>
      </div>

      <form>
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={submitHandler}>Search</button>
      </form>
      {searchInput && <AboutPageSearch />}
    </div>
  );
};

export default AboutPage;

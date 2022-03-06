
import { useState } from "react";
import styles from "./Numbers.module.css";
import { NavLink,useNavigate } from "react-router-dom";
const Numbers = ({ digits }) => {
  const [userPin, setUserPin] = useState("");
  const navigate= useNavigate() //1
  if (userPin.length === 4 && userPin === "1972") {
    // alert("Access granted!");
 navigate(`/course`)
  } else if (userPin.length === 4 && userPin !== "1972") {
    alert("Access denied!");
  }
  const buttonHandle = (e) => {
    if (userPin.length < 4) { 
      setUserPin((userPin) => {
        return userPin + e.target.value;//""+1+1
      });
    }
  };

  return (
    <div className={styles.container}>
      {digits.map((ele, i) => (
        <button
          className={styles.button}
          key={i}
          onClick={buttonHandle}
          value={ele}
        >
          {ele}
        </button>
      ))}
    </div>
  );
};

export default Numbers;

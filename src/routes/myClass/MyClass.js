import React from 'react'
import Numbers from "../../components/Numbers/Numbers"
import styles from "./MyClass.module.css"
const MyClass = () => {
    const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return (
      <div className={styles.container}>
        <p className={styles.para}>Enter your pin</p>
        <Numbers digits={digits} />
      </div>
    );
}

export default MyClass

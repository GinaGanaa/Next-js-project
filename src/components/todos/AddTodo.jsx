import React, { useState } from "react";
import styles from "./AddTodo.module.css";
import { Racing_Sans_One } from "next/font/google";

const Racing = Racing_Sans_One({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  disply: "swap",
});

export const AddTodo = () => {
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    setInput("");
  };

  return (
    <>
      <form className={styles.addInput} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add todo"
          value={input}
          name="text"
          className="todoInput"
          onChange={handleChange}
        />
        <div className={`${Racing.className}`}>
          <button>Add task</button>
        </div>
      </form>
      <div className={styles.bottomLine}></div>
    </>
  );
};

import styles from "./AddTodo.module.css";
import { Racing_Sans_One } from "next/font/google";
const Racing = Racing_Sans_One({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const AddTodo = () => {
  return (
    <>
      <div className={styles.addInput}>
        <input type="text" />
        <div className={`${Racing.className}`}>
          <button>Add task</button>
        </div>
      </div>
    </>
  );
};

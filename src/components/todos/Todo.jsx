import { DeleteIcon } from "../icons/DeleteIcon";
import styles from "./Todo.module.css";
export const Todo = (props) => {
  const { data } = props;

  return (
    <div className={styles.inputTask}>
      <div className={styles.task}>
        <div>{data.task}</div>
        <button className={styles.deleteBtn}>
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
};

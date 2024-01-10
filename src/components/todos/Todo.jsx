import { DeleteIcon } from "../icons/DeleteIcon";
import { v4 as uuidv4 } from "uuid";
import styles from "./Todo.module.css";
uuidv4();

// export const Todo = (props) => {
//   const { data } = props;

export const Todo = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };
  return (
    <div className="TodoWrapper">
      <TodoForm addTodo={addTodo} />
    </div>
  );
  // return (
  //   <div className={styles.inputTask}>
  //     <div className={styles.task}>
  //       <div>{data.task}</div>
  //       <button className={styles.deleteBtn}>
  //         <DeleteIcon />
  //       </button>
  //     </div>
  //   </div>
  // );
};

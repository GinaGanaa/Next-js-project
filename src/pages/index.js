import { Header } from "@/components/header/Header";
import { AddTodo } from "@/components/todos/AddTodo";
import { Todo } from "@/components/todos/Todo";
import Head from "next/head";
import style from "./index.module.css";

const todosData = [
  {
    id: 1,
    task: "First Task",
  },
  {
    id: 2,
    task: "Second Task",
  },
  {
    id: 3,
    task: "Third Task",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <div className={`${style.container}`}>
          <Header />
          <AddTodo />
        </div>
        <div>
          {todosData.map((todo, index) => (
            <Todo data={todo} key={index} />
          ))}
        </div>
      </main>
    </>
  );
}

let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
arr.map((num, index) => {
  console.log(index, "-", num);
});

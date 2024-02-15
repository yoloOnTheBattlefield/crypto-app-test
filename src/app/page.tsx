"use client";
import StoreProvider from "./StoreProvider";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { addTodo, toggleTodo } from "@/lib/features/todo";

const List = () => {
  const todos = useAppSelector((state) => state.todos);
  const dispatch = useAppDispatch();

  return (
    <div>
      <button
        onClick={() =>
          dispatch(addTodo({ id: Math.random(), value: "4", completed: false }))
        }
      >
        Add stuff
      </button>
      {todos.map((todo, index) => (
        <li key={todo.id}>
          {todo.value}
          <button onClick={() => dispatch(toggleTodo(todo))}>
            {todo.completed ? "done" : "pending"}
          </button>
        </li>
      ))}
    </div>
  );
};

export default function Home() {
  return (
    <StoreProvider>
      <List />
    </StoreProvider>
  );
}

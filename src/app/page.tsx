"use client";
import StoreProvider from "./StoreProvider";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { addTodo, toggleTodo, removeTodo } from "@/lib/features/todo";

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
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.value}
          <button onClick={() => dispatch(toggleTodo(todo))}>
            {todo.completed ? "done" : "pending"}
          </button>
          <button onClick={() => dispatch(removeTodo(todo))}>Delete</button>
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

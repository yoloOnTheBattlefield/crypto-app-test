"use client";
import StoreProvider from "./StoreProvider";
import { useAppSelector } from "@/lib/hooks";

const List = () => {
  const todos = useAppSelector((state) => state.todos);

  return (
    <div>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.value}</li>
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

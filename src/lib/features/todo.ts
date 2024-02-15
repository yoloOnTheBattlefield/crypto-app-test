import { createReducer, createAction, current } from "@reduxjs/toolkit";

const ADD_TODO = "ADD_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";

const todosReducer = createReducer(
  [
    { value: "todo 1", id: 1, completed: false },
    { value: "todo 2", id: 2, completed: false },
    { value: "todo 3", id: 3, completed: false },
  ],
  (builder) => {
    builder
      .addCase(ADD_TODO, (state, action: any) => {
        // "mutate" the array by calling push()
        state.push(action.payload);
        return state;
      })
      .addCase(TOGGLE_TODO, (state, action: any) => {
        const nextItem = { ...action.payload };
        nextItem.completed = !nextItem.completed;
        return state.map((el, i) => {
          if (el.id === action.payload.id) {
            return nextItem;
          }
          return { ...el };
        });
      })
      .addCase("REMOVE_TODO", (state, action: any) => {
        // Can still return an immutably-updated value if we want to
        return state.filter((todo, i) => i !== action.payload.index);
      });
  }
);

export const addTodo = createAction(ADD_TODO);
export const toggleTodo = createAction(TOGGLE_TODO);

export default todosReducer;

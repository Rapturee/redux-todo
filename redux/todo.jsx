import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todoList",
  initialState: [],

  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        todoTitle: action.payload,
        done: false,
      };
      state.push(newTodo);
    },
    removeTodo: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload);
      if (index !== -1);
      {
        state.splice(index, 1);
      }
    },
    toggleComplete: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.done = !todo.done;
      }
    },
  },
});

export const { addTodo, removeTodo, toggleComplete } = todoSlice.actions;

export default todoSlice.reducer;

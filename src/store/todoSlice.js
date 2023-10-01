import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push({
        id: new Date().toISOString(),
        text: action.payload.text, //то что нужно для действия берется из action
        completed: false,
      });
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    handleTodoComplete(state, action) {
      const handleTodo = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      handleTodo.completed = !handleTodo.completed;
    },
  },
});
export const { addTodo, removeTodo, handleTodoComplete } = todoSlice.actions;
export default todoSlice.reducer;

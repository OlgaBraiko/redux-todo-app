import { useState } from "react";
import { TodoList } from "./components/TodoList";
import { InputField } from "./components/InputField";
import "./App.css";
// import { TodoItem } from "./components/TodoItem";

export const App = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const addTodo = () => {
    if (text.trim().length) {
      setTodos([
        ...todos,
        {
          id: new Date().toISOString(),
          text,
          completed: false,
        },
      ]);
      setText("");
    }
  };

  const handleTodoComplete = (todoId) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== todoId) return todo;

        return {
          ...todo,
          completed: !todo.completed,
        };
      })
    );
  };

  const removeTodo = (todoId) => [
    setTodos(todos.filter((todo) => todo.id !== todoId)),
  ];

  return (
    <div>
      <InputField text={text} handleInput={setText} handleSubmit={addTodo} />
      <TodoList
        todos={todos}
        handleTodoComplete={handleTodoComplete}
        removeTodo={removeTodo}
      />
    </div>
  );
};

export default App;

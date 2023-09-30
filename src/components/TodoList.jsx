import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos, handleTodoComplete, removeTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          removeTodo={removeTodo}
          handleTodoComplete={handleTodoComplete}
          {...todo}
        />
      ))}
    </ul>
  );
};

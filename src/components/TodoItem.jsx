export const TodoItem = ({
  id,
  text,
  completed,
  removeTodo,
  handleTodoComplete,
}) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => handleTodoComplete(id)}
      />
      <span>{text}</span>
      <span className="delete" onClick={() => removeTodo(id)}>
        &times;
      </span>
    </li>
  );
};

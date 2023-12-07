import "./TodoItem.css";

function TodoItem({ text, number, completed }) {
  return (
    <li className="TodoItem">
      <span className={`Icon Icon-check ${completed && "Icon-check--active"}`}>
        V
      </span>
      <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
        {text} {number}{" "}
      </p>
      <span className="Icon Icon-delete">X</span>
    </li>
  );
}

export { TodoItem };

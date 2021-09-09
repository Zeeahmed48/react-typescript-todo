interface Props {
  singleTodo: string;
  deleteAction(taskNametoDelete: string): void;
}

const Todo = ({ singleTodo, deleteAction }: Props) => {
  return (
    <li>
      <p>{singleTodo}</p>
      <button onClick={() => deleteAction(singleTodo)}>Delete</button>
    </li>
  );
};

export default Todo;

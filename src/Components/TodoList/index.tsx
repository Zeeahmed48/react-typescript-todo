import Todo from "../Todo";

interface Props {
  todoList: string[];
  deleteAction(taskNametoDelete: string): void;
}

const TodoList = ({ todoList, deleteAction }: Props) => {
  return (
    <ul className="todo__item">
      {todoList.map((singleTodo: string, index: number) => {
        return (
          <Todo
            key={index}
            singleTodo={singleTodo}
            deleteAction={deleteAction}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;

import { FC, useState, ChangeEvent } from "react";
import TodoList from "./Components/TodoList";

const App: FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todoList, setTodoList] = useState<string[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setTodo(e.target.value);
  };

  const addTodo = (): void => {
    if (!todo) {
      return;
    }
    setTodoList([...todoList, todo]);
    setTodo("");
  };

  const deleteTodo = (taskNametoDelete: string): void => {
    setTodoList(todoList.filter((task) => task !== taskNametoDelete));
    setTodo("");
  };

  return (
    <div className="app">
      <div className="todo_lists">
        <h1>Todo List</h1>
        <div className="input_wrapper">
          <input type="text" onChange={handleChange} value={todo} />
          <button onClick={addTodo}>Add todo</button>
        </div>
        <TodoList todoList={todoList} deleteAction={deleteTodo} />
      </div>
    </div>
  );
};

export default App;

import { useContext } from "react";
import TodoItem from "./TodoItem"
import { TodoListContext } from "../store/todo-item-store";

const TodoItems = () => {

  const { todoItems } = useContext(TodoListContext);
  const {handleDeleteItem} = useContext(TodoListContext)
  
  return (
    <div className="row">
    {todoItems.map((item) =>(
      <TodoItem key={item.name} todoDate={item.dueDate} todoName={item.name} onDeleteClick={handleDeleteItem} ></TodoItem>
    ))}</div>
  )
}
export default TodoItems;
import { useContext } from "react"
import TodoItem from "./TodoItem"
import { TodoItemsContex } from "../store/todo-item-store"

const TodoItems = () => {


  const {todoItems} = useContext(TodoItemsContex)
// If you can add the shortcut**
  // const contexObj = useContext(TodoItemsContex)
  // const todoItems = contexObj.todoItems

  


  return (
    <div className="row">
    {todoItems.map((item) =>(
      <TodoItem key={item} todoDate={item.dueDate} todoName={item.name}></TodoItem>
    ))}</div>
  )
}
export default TodoItems
import { useContext } from "react"
import TodoItem from "./TodoItem"
import { TodoItemContex } from "../store/item-store"

const TodoItems = () => {

  const { todoItems } = useContext(TodoItemContex)
  const { onDeleteClick } = useContext(TodoItemContex)


  return (
    <div className="row">
    {todoItems.map((item) =>(
      <TodoItem key={item} todoDate={item.dueDate} todoName={item.name}   onDeleteClick={onDeleteClick}></TodoItem>
    ))}</div>
  )
}
export default TodoItems
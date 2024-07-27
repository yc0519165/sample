import { useContext } from "react"
import { TodoItemsContex } from "../store/todo-item-store"

const WelcomeMessage =() =>{

  const contexObj = useContext(TodoItemsContex)
  const todoItems = contexObj.todoItems
  return (
    todoItems.length === 0 && <p>Enjoy your day <b>...</b></p>)
}
export default WelcomeMessage
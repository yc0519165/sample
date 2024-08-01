import { useContext } from "react"
import { TodoItemContex } from "../store/item-store"

const WelcomeMessage =() =>{
  const { todoItems } = useContext(TodoItemContex)
  return (
    todoItems.length === 0 && <p>Enjoy your day <b>...</b></p>)
}
export default WelcomeMessage
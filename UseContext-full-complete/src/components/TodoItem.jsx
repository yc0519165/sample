import { useContext } from "react"
import { TodoItemsContex } from "../store/todo-item-store"

function TodoItem( {todoName, todoDate }) {
  const { deleteItem } = useContext(TodoItemsContex)
  return (
    <div className="row">
    <div className="col-4">{todoName}</div>
    <div className="col-2">{todoDate}</div>
    <div className="col-4">
      <button type="button" className="btn btn-danger"
      onClick={() => deleteItem(todoName)}>Delete</button>
    </div>
     </div>


    

  )
}

export default TodoItem
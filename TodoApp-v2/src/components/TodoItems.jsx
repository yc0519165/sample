import TodoItem from "./TodoItem"

const TodoItems = ( {todoItems} ) => {
  return (<div className="row">
  {todoItems.map((item) =>{
  <TodoItem todoName={item.name} todoDate={item.dueDate}></TodoItem>
  })}
  
  </div>
  )
}
export default TodoItems
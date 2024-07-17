import TodoItem from "./TodoItem"

const TodoItems = ( {todoItems} ) => {
  return (<div className="row">
  {todoItems.map((item) => (<TodoItem key={item}  todoDate={item.dueDate} todoName={item.name}></TodoItem>
  ))}
  
  </div>
  )
}
export default TodoItems;
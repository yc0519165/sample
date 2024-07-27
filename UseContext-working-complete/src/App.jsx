import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "bootstrap/dist/css/bootstrap.min.css"
import './app.css'
import WelcomeMessage from "./components/WelcomeMessage";
import { useState } from "react";
import { TodoItemContex } from "./store/item-store";


function App (){

  const [todoItems, setTodoItems] = useState([])

  const handleNemItem = (itemName, itemDueDate) =>{
    console.log(`New Item Added: ${itemName} Date:${itemDueDate}`)
    const newTodoItem =[
      ...todoItems, {name: itemName, dueDate: itemDueDate}
    ]
    setTodoItems(newTodoItem);
  }
  const handleDeleteItem = (todoItemName) => {
    const newTodoItem = todoItems.filter(item => item.name !== todoItemName)
    setTodoItems(newTodoItem);
  }
  
  // const defaultTodoList = {name: 'itemName', dueDate: 'itemDueDate'}

  return (
    <TodoItemContex.Provider value = {[]}>

  <center>
    <AppName></AppName>
    <AddTodo handleNemItem={handleNemItem}></AddTodo>
    <WelcomeMessage todoItem={todoItems} ></WelcomeMessage>
    <TodoItems todoItems={todoItems}
    onDeleteClick={handleDeleteItem}></TodoItems>
  </center>
  </TodoItemContex.Provider>
  )
}

export default App ;
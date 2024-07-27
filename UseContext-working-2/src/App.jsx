import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "bootstrap/dist/css/bootstrap.min.css"
import './app.css'
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";


function APP (){

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
  

  return (
    
  <center>
    <AppName></AppName>
    <AddTodo handleNemItem={handleNemItem}></AddTodo>
    <WelcomeMessage todoItems={todoItems} ></WelcomeMessage>
    <TodoItems todoItems={todoItems}
    onDeleteClick={handleDeleteItem}></TodoItems>
  </center>
  )
}

export default APP ;
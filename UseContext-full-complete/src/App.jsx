import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "bootstrap/dist/css/bootstrap.min.css"
import './app.css'
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import { TodoItemsContex } from "./store/todo-item-store";


function App (){

  const [todoItems, setTodoItems] = useState([])

  const addNemItem = (itemName, itemDueDate) =>{
    console.log(`New Item Added: ${itemName} Date:${itemDueDate}`)
    const newTodoItem =[
      ...todoItems, {name: itemName, dueDate: itemDueDate}
    ]
    setTodoItems(newTodoItem);
  }
  const deleteItem = (todoItemName) => {
    const newTodoItem = todoItems.filter(item => item.name !== todoItemName)
    setTodoItems(newTodoItem);
  }


  return( 
    <TodoItemsContex.Provider
     value={{
      // this is shortcut code
      todoItems,
      addNemItem,
      deleteItem,

      // todoItems: todoItems,
      // addNemItem :addNemItem,
      // deleteItem :deleteItem,
      }}>
  <center>
    <AppName></AppName>
    <AddTodo ></AddTodo>
    <WelcomeMessage ></WelcomeMessage>
    <TodoItems 
    ></TodoItems>
    
  </center>
  </TodoItemsContex.Provider>
  )
}

export default App ;
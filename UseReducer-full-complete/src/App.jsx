import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "bootstrap/dist/css/bootstrap.min.css"
import './app.css'
import WelcomeMessage from "./components/WelcomeMessage";
import
 TodoItemsContexProvider  from "./store/todo-item-store";


function App (){

  return( 
    <TodoItemsContexProvider>
  <center>
    <AppName></AppName>
    <AddTodo ></AddTodo>
    <WelcomeMessage ></WelcomeMessage>
    <TodoItems 
    ></TodoItems>
    
  </center>
  </TodoItemsContexProvider>
  )
}

export default App ;
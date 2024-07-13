import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import TodoName from "./components/TodoName"
import TodoItems from "./components/TodoItems"

function App() {
  const todoItems = [
    {
      name:'Buy Milk',
      dueDate:'21/07/2002',
    },
    {
      name:'College',
      dueDate:'21/07/2002',
    },
    {
      name:'Go to GYM',
      dueDate:'21/07/2002',
    }
  ]

  return (
    <center className='container'>
      <TodoName></TodoName>
      <TodoItems todoItems={todoItems}></TodoItems>

    </center>
  )
}

export default App
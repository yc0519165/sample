import Heading from "./components/Heading"
import Date from "./components/Date"
import Milk from "./components/Milk"
import College from "./components/College"
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'

function App() {

  return (
    <center className="container">
      <Heading></Heading>
      <Date></Date>
      <Milk></Milk>
      <College></College>
    </center>
  )
}

export default App

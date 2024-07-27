import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from './component/Container';
import Heading from './component/Heading';
import Display from './component/Display';
import Message from './component/Message';
import ListItems from './component/ListItems';


function App() {

  const city = ['Mumbai', 'Pune', 'Nasik', 'Jalgoan', 'Sambhaji Nagar', 'AhilyaNager']

  // const city =[]

  const screen = (event) =>{
    console.log(event.target.value)
  }



  return(
    <Container>
    <Heading></Heading>
    <Display screen= {screen}></Display>
    <Message city={city}></Message>
    <ListItems city={city}></ListItems>
    </Container>
  )
}

export default App

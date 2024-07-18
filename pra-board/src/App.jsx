import'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Heading from './components/Heading'
import ListItems from './components/ListItems'
import Message from './components/Message'
import Container from './components/Container'
import Search from './components/Search'

function App() {

  let mobiles = ['Samsung','I Phone','Oppo','Vivo','One Plus','MOTO','Xiomi']

  return (
    <>
    <Container>
    <Heading></Heading>
    <Search></Search>
    <Message mobile={mobiles}></Message>
    <ListItems mobile={mobiles}></ListItems>
    </Container>
    </>
  )
}

export default App

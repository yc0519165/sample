import'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Heading from './component/Heding'
import Message from './component/Message'
import ListItems from './component/ListItems'
import Container from './component/Container'
import SearchBar from './component/SearchBar'

function App() {

  let product = ['Jins Pent','T-Shirts','Shirt','Jocket','Formal Dres','Kurta','Paijama']
  // let product = []
  
  
  return (
    <>
    <Container>
    <Heading></Heading>
    <SearchBar></SearchBar>
    <Message products={product}></Message>
    <ListItems products={product}></ListItems>
    </Container>
    </>
  )
}

export default App

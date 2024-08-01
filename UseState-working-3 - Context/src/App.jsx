import'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Message from './components/Message'
import Heading from './components/Heading'
import ListItems from './components/ListItems'
import Container from './components/Container'
import Searchbar from './components/Searchbar'
import { useState } from 'react'

function App() {

  // let product = ['Jins Pent','T-Shirts','Shirt','Jocket','Formal Dres','Kurta','Paijama']
  // let product = []
  let [product, setProduct] = useState([])

  let onButtonChange = (event) =>{
    if(event.key === 'Enter'){
      const newProduct = (event.target.value);
      const prod = [...product, newProduct]
      setProduct(prod)
    }
    console.log(event.target.value)
  }
  
  
  return (
    <>
    <Container>
    <Heading></Heading>
    <Searchbar onButtonChanges = {onButtonChange}></Searchbar>
    <Message products={product}></Message>
    <ListItems products={product}></ListItems>
    </Container>
    </>
  )
}

export default App

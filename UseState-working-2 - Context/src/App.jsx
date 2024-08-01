import'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Heading from './component/Heading'
import Message from './component/Message'
import ListItems from './component/ListItems'
import Container from './component/Container'
import Display from './component/Display'
import { useState } from 'react'
import { SearchContext } from './store/search'

function App() {

  // let portal = ['Indeed','Link Din','Glass Door','Intershala','Simply Hired','Work India','Naukri']
  // let portal = []
  let [portal, setNewPortal] = useState([])


  const change = (event) =>{
    if(event.key === 'Enter'){
      let newAdd = (event.target.value);
      let port =[...portal, newAdd]
      setNewPortal(port)
    }
    console.log(event.target.value)
  }

  

  return (

    <SearchContext.Provider value={{
      portal,
      change,


    }}>
    <Container>
    <Heading></Heading>
    <Display ></Display>
    <Message></Message>
    <ListItems ></ListItems>
    </Container>
    </SearchContext.Provider>
    
  
  )
}

export default App

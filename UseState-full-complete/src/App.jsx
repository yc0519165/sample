import'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Heading from './components/Heading'
import ListItems from './components/ListItems'
import Message from './components/Message'
import Container from './components/Container'
import Search from './components/Search'
import { useState } from 'react'

function App() {
  // let mobiles = ['Samsung','I Phone','Oppo','Vivo','One Plus','MOTO','Xiomi']
  // this array are flow in the state |^| 1 step
  // let stateArr = useState();
  // let textShow = stateArr[0];
  // let setState = stateArr[1];

  // If you can add the shotcut |^^^| 2 step
 // let [textShow, setState] = useState('Searching top phones');

  //  console.log(`You have the see changes ${textShow}`)
  let [mobiles, setMobiles] = useState([/*'I Phone','Oppo','Vivo','One Plus','Xiomi'*/])

///======================== 3 step
  const hanleOnChange = (event) => {
    if(event.key === 'Enter'){
      let newPhone = event.target.value;
      let pho = [...mobiles, newPhone]
      setMobiles(pho)
      console.log(`Launch the phone by ${newPhone}`)
    }
    //  console.log(event)
    //  setState(event.target.value)

  }

  return (
    <>
    <Container>
    <Heading></Heading>
    <Search hanleOnChange={hanleOnChange}></Search>
    <Message mobile={mobiles}></Message>
    <ListItems mobile={mobiles}></ListItems>
    </Container>
    </>
  )
}

export default App

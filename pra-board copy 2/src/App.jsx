import'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Heading from './component/Heading'
import Message from './component/Message'
import ListItems from './component/ListItems'
import Container from './component/Container'
import Display from './component/Display'

function App() {

  let portal = ['Indeed','Link Din','Glass Door','Intershala','Simply Hired','Work India','Naukri']
  // let portal = []
  

  return (
    <>
    <Container>
    <Heading></Heading>
    <Display></Display>
    <Message portal={portal}></Message>
    <ListItems portal={portal}></ListItems>
    </Container>
    
    </>
  )
}

export default App

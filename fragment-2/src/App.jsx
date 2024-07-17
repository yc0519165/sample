import HeadList from './component/HeadList'
import ListItem from './component/ListItem'
import'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Message from './component/Message'
import Container from './component/Container'
import Carinput from './component/Carinput'
function App() {

  let names = ['B M W','T A T A','Huyndai','Walswalgan','Mahindra','Skoda']

  return (
    <>
    <Container>
    <HeadList></HeadList>
    <Carinput></Carinput>
    <Message items={names}></Message>
    <ListItem items={names}></ListItem>
    </Container>
    </>
  )
}

export default App

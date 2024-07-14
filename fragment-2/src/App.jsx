import HeadList from './component/HeadList'
import ListItem from './component/ListItem'
import'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Message from './component/Message'

function App() {

  let names = ['Mercedes Benz','Lamobrgini','B M W','T A T A','Huyndai','Walswalgan','Mahindra','Skoda']

  return (
    <>
    <HeadList></HeadList>
    <Message items={names}></Message>
    <ListItem items={names}></ListItem>
    </>
  )
}

export default App

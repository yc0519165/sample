import'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Heading from './components/Heading'
import Message from './components/Message'
import ListItems from './components/ListItems'
import Container from './components/Container'
import Display from './components/Display'

function App() {
  let countryName = ['INDIA','UNITED STATE','UNITED URAB','JAPAN','GERMANY','UNITED KINGDOM','CHINA','ITALY']
  return (
    <>
    <Container>
    <Heading></Heading>
    <Display></Display>
    <Message countryNames={countryName}></Message>
    <ListItems countryNames={countryName}></ListItems>
    </Container>
    </>
  )
}

export default App

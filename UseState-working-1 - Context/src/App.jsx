import'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Heading from './components/Heading'
import Message from './components/Message'
import ListItems from './components/ListItems'
import Container from './components/Container'
import Display from './components/Display'
import { useState } from 'react'
import { SearchContext } from './store/search-context'

function App() {
  // let countryName = ['INDIA','UNITED STATE','UNITED URAB','JAPAN','GERMANY','UNITED KINGDOM','CHINA','ITALY']

  let [countryName, setCountry] = useState([/*'UNITED STATE','UNITED URAB','JAPAN'*/])


  let onChanged = (event) =>{
    if(event.key === 'Enter'){
      let newCountry = (event.target.value)
      let cou = [...countryName, newCountry]
      setCountry(cou)
      console.log(`add new country ${newCountry}`);
    }
    // console.log(event.target.value)
  }

  return (
    <>
    <SearchContext.Provider value={{
      countryNames : countryName,
      onChanging : onChanged
    }}>
    <Container>
    <Heading></Heading>
    <Display onChanging={onChanged} ></Display>
    <Message countryNames={countryName}></Message>
    <ListItems countryNames={countryName}></ListItems>
    </Container>
    </SearchContext.Provider>
    </>
  )
}

export default App

import { useState } from 'react'
import ListItem from './ListItem'
import styles from './ListItems.module.css'


function ListItems ({countryNames}) {
  let [activeCountry, setCountryName] = useState([])

  let  onTicketButton = (country, event)=>{
    let newCountrs = [...activeCountry, country]
    setCountryName(newCountrs)
  }

  return(
    <ul className={`${styles.group} list-group`}>
      {countryNames.map((country) => (
        <ListItem key={country} 
        name={country} 
        booked={activeCountry.includes(country)}
        onHandleClick={ (event) => onTicketButton (country, event)}></ListItem>
      ))}  
      
      
       </ul> 
  )
}
export default ListItems
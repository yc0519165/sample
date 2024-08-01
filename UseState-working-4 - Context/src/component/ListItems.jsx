import ListItem from './ListItem'
import styles from './ListItems.module.css'
import { useState } from 'react'

const ListItems = ( {city} ) =>{
  const [addNew, setAddNew] = useState('')

  const onCiltyBtn = (cites, event) =>{
    const addCi = [...addNew, cites]
    setAddNew(addCi)

  }
  
  

  return(
    <ul className={`${styles.group} list-group`}>
    {city.map((cites) =>(
       <ListItem key={cites} 
       cites={cites}
       select = {addNew.includes(cites)}
       onButton = {(event) => onCiltyBtn
        (cites, event)}

        ></ListItem>
    ))}
  </ul>

  )
}
export default ListItems
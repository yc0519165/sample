import ListItem from "./ListItem"
import styles from './ListItems.module.css'
import { useState } from 'react'

const ListItems = ({portal}) =>{
  const [activePortal, setActivePortal] = useState('')

  const onApplyBtn = (link, event) =>{
    const newPortals = [...activePortal, link]
    setActivePortal(newPortals)
  }

  
  return(
    <ul className={`${styles.lists} list-group`}>   
      {portal.map((link) =>(
     <ListItem key={link}
      links={link} 
      apply={activePortal.includes(link)}
     onClick={(event) => onApplyBtn(link, event)}
     ></ListItem>
      ))}
    </ul>
  )
}

export default ListItems;
import ListItem from "./ListItem"
import styles from './ListItems.module.css'

const ListItems = ({portal}) =>{
  return(
    <ul className={`${styles.lists} list-group`}>   
      {portal.map((link) =>(
     <ListItem key={link} links={link}></ListItem>
      ))}
    </ul>
  )
}
export default ListItems
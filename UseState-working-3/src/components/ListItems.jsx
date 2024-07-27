import ListItem from "./ListItem"
import styles from './ListItems.module.css'

function ListItems ({products}) {
  return(
    <ul className={`${styles.group} list-group`}>
    {products.map((item) =>(
      <ListItem key={item}
       items = {item}
       onButtonClick={() => console.log(`This is a Most Popular: ${item}`)}
       ></ListItem>
      
    ))}


  </ul>

  )
}
export default ListItems
import ListItem from "./ListItem"
import styles from './ListItems.module.css'

function ListItems ({products}) {
  return(
    <ul className={`${styles.data} list-group`}>
      {products.map((cloths) => (
    <ListItem key={name} name={cloths}>{name}</ListItem>
    ))}
    </ul>
  )
}
export default ListItems
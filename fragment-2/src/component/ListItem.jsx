import Item from "./Item"
import styles from './Item.module.css'
const ListItem = ({items}) =>{

  return  (
    <>
    <ul className={`${styles.group} list-group`}>
    {items.map ((car) =>
    <Item key={car} names={car}></Item>
    )}
    </ul>
    </>
  )
}
export default ListItem

import styles from './Item.module.css'
const Item = ({names}) =>{
  return  <li className= {`${styles.Item} list-group-item `}>{names}</li>
}
export default Item;
import styles from './ListItem.module.css'

function ListItem ({items, onButtonClick}) {

  return(
    <li key={items} className={`${styles.list} list-group-item`}>
       {items} 
       <button onClick={onButtonClick} className={`${styles.btns} btn btn-primary`}>Purches Now</button></li>
  )
}
export default ListItem
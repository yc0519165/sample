import styles from './ListItem.module.css'

function ListItem ({items,purches, onButtonClick}) {

  return(
    <li key={items} className={`${styles.list} list-group-item ${purches && 'active'}`}>
       {items} 
       <button onClick={onButtonClick} className={`${styles.btns} btn btn-primary`}>Purches Now</button></li>
  )
}
export default ListItem
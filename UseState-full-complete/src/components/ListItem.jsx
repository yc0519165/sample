import styles from './ListItem.module.css'
function ListItem ({name, colorCh, onHandleClick}) {
  return(
    <li className={`${styles.lists} list-group-item ${colorCh && 'active'}`}>{name} <button className={`${styles.btn} btn btn-info`} onClick={onHandleClick}>Buy</button></li>
  )
}
export default ListItem
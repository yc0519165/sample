import styles from './ListItem.module.css'
function ListItem ({name}) {
  const onClick = ()=>{
    console.log(`${name} this is phone`)
  }
  return(
    <li className={`${styles.lists} list-group-item`}>{name} <button className={`${styles.btn} btn btn-info`} onClick={onClick}>Buy</button></li>
  )
}
export default ListItem
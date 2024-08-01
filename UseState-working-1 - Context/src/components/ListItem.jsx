import styles from './ListItem.module.css'
const ListItem = ({name, booked, onHandleClick}) =>{
  // const onClick = () =>{
  //  
  // }
  return(
    <li key={name} className={`${styles.lists} list-group-item ${booked && 'active'}`}>{name} <button className={`${styles.btn} btn btn-info`} onClick={onHandleClick}>Ticket</button></li>
  )
}
export default ListItem;
import styles from './ListItem.module.css'
const ListItem = ({name}) =>{
  const onClick = () =>{
   console.log(`Ticket has booked by ${name}`)
  }
  return(
    <li key={name} className={`${styles.lists} list-group-item`}>{name} <button className={`${styles.btn} btn btn-info`} onClick={onClick}>Ticket</button></li>
  )
}
export default ListItem
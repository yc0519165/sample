import styles from './ListItem.module.css'
const ListItem = ({links, onClick}) =>{
  return(
    <li key={links} className={`${styles.group}  list-group-item`}>{links} <button className={`${styles.btns} btn btn-info`} onClick= {onClick}>Apply</button></li>

  )
}
export default ListItem
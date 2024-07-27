import styles from './ListItem.module.css'
const ListItem = ({links, apply, onClick}) =>{
  return(
    <li key={links} className={`${styles.group}  list-group-item ${apply && 'active'}`}>{links} <button className={`${styles.btns} btn btn-info`} onClick= {onClick}>Apply</button></li>

  )
}
export default ListItem
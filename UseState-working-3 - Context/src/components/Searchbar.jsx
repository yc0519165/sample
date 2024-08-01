import styles from './Searchbar.module.css'
const Searchbar = ({onButtonChanges}) =>{
 
  return(
    <input className={styles.seacrh} type="text" placeholder="Search the colthing" onKeyDown={onButtonChanges}/>
  )
}
export default Searchbar
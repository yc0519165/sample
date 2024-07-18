import ListItem from './ListItem'
import styles from './ListItems.module.css'
function ListItems ({countryNames}) {
  return(
    <ul className={`${styles.group} list-group`}>
      {countryNames.map((country) => (
        <ListItem key={country} name={country}></ListItem>
      ))}
    
    </ul>
  )
}
export default ListItems
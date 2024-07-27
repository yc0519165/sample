import ListItem from './ListItem'
import styles from './ListItems.module.css'

const ListItems = ( {city} ) =>{

  return(
    <ul className={`${styles.group} list-group`}>
    {city.map((cites) =>(
       <ListItem key={cites} cites={cites}
        ></ListItem>
    ))}
  </ul>

  )
}
export default ListItems
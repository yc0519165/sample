import ListItem from './ListItem'
import styles from './ListItems.module.css'
function ListItems({mobile}){

  return <ul className={`${styles.group} list-group`}>
  {mobile.map((item) => 
      <ListItem key={item} name={item}></ListItem>
      )}
</ul>
}
export default ListItems
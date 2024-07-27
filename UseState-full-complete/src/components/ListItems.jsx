import { useState } from 'react'
import ListItem from './ListItem'
import styles from './ListItems.module.css'


function ListItems({mobile}){
  let [activeItems, setActiveItem] = useState([])

  let onBuyButton = (item, event) =>{

    let newItems = [...activeItems, item];
    setActiveItem(newItems);
  }

  return <ul className={`${styles.group} list-group`}>
  {mobile.map((item) => 
      <ListItem key={item} name={item} colorCh={activeItems.includes(item)}
       onHandleClick={ (event) => onBuyButton(item, event)}></ListItem>
      )}
</ul>
}
export default ListItems
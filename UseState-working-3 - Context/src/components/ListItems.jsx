import ListItem from "./ListItem"
import styles from './ListItems.module.css'
import { useState } from 'react'

function ListItems ({products}) {
     const [addProduct, setAddProduct] = useState('')

     const onPurchesBtn =(item, event)=>{
      const newProd = [...addProduct, item]
      setAddProduct(newProd)
     }
  return(
    <ul className={`${styles.group} list-group`}>
    {products.map((item) =>(
      <ListItem key={item}
       items = {item}
       purches = {addProduct.includes(item)}
       onButtonClick={(event) => onPurchesBtn(item, event)}
       ></ListItem>
      
    ))}


  </ul>

  )
}
export default ListItems
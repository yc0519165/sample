import styles from './Item.module.css'
const Item = ({names}) =>{

  const clicingElement =() =>{
    console.log (`${names} buy this car`)
  }
  return  <li className= {`${styles.Item} list-group-item `}>{names}
  <button className={`${styles.button} btn btn-info`}
  onClick={clicingElement }
  >Buy</button> </li>
}
export default Item;
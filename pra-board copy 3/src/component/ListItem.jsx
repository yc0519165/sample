import styles from './ListItem.module.css'
function ListItem ({name}) {
  const onClick1 =()=>{
    console.log(`Thanks For Buy ${name}`)
  }
  const onClick2 = () => {
    console.log(`Show Less Deatails for ${name}`)
  }
  return(
    <li key={name} className={`${styles.item} list-group-item`}>{name} <button className={`${styles.btns} btn btn-info`} onClick={onClick2}>Show Product</button> 
    <button className={`${styles.btns} btn btn-success`} onClick={onClick1}>Buy</button></li>
  )
}
export default ListItem
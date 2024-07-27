import styles from './ListItem.module.css'

const ListItem = ({cites}) =>{

  const selButn = () =>{
    console.log(`You are Seltcted City ${cites}`) 
  }
  const delBtn = () =>{
    console.log(`You are Deleted City ${cites}`)
  }
  return(
<li key={cites} className={`${styles.list} list-group-item`}> {cites}<button type="button" className={`${styles.btn} btn btn-success`} onClick={selButn}>Select</button>
<button type="button" className={`${styles.btn} btn btn-danger`} onClick={delBtn}>Delete</button></li>
  )
}
export default ListItem
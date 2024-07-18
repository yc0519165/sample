import styles from './Display.module.css'

function Display (){
  let onChanged = (event) =>{
    console.log(event.target.value)
  }
  return(
    <input className={styles.screen} type="text"  placeholder="" onChange={onChanged} />
  )
}
export default Display
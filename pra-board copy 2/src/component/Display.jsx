import styles from './Display.module.css'


const Display = () =>{
  const change = (event) =>{
    console.log(event.target.value)
  }
  return(
    <input className={styles.screen} type="text" placeholder="" onChange={change} />
  )
}
export default Display
import styles from './Display.module.css'


const Display = ({changes}) =>{
  return(
    <input className={styles.screen} type="text" placeholder="" onKeyDown={changes} />
  )
}
export default Display
import styles from './Display.module.css'

function Display ({onChanging}){
  return(
    <input className={styles.screen} type="text"  placeholder="" onKeyDown={onChanging} />
  )
}
export default Display
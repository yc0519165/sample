import styles from './Display.module.css'
import { SearchContext } from '../store/search'
import { useContext } from 'react'


const Display = () =>{
  const {change} = useContext
  
  (SearchContext)
  return(
    <input className={styles.screen} type="text" placeholder="" onKeyDown={change} />
  )
}
export default Display
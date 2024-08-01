import { useContext } from 'react'
import styles from './Message.module.css'
import { SearchContext } from '../store/search'
const Message = () =>{
  const { portal } = useContext(SearchContext)
  return(
    portal.length == 0 && <h4 className={styles.message}>Search the jojs Portal...</h4>
  )
}
export default Message
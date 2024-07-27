import styles from './Message.module.css'
const Message = ({city}) =>{
 
  return(
    city.length === 0 && <h4 className={styles.message} >Select Your Like City...</h4>

  )
}
export default Message
import styles from './Message.module.css'
const Message = ({mobile}) =>{
  return(
    mobile.length ===0 && <h4 className={styles.message}>Sorry phone is not found...</h4>
  )
}
export default Message
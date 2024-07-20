import styles from './Message.module.css'
const Message = ({portal}) =>{
  return(
    portal.length == 0 && <h4 className={styles.message}>Job is not Found...</h4>
  )
}
export default Message
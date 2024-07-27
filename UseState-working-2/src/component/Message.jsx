import styles from './Message.module.css'
const Message = ({portal}) =>{
  return(
    portal.length == 0 && <h4 className={styles.message}>Search the jojs Portal...</h4>
  )
}
export default Message
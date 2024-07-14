import styles from './Message.module.css'
const Message = ({items}) =>{

  return( items.length ===0 && <h3 className={styles.error}>I am Still
     Hungry..!</h3>
  )
}
export default Message

import styles from './Message.module.css'

const Message = ({countryNames}) =>{
  return(
    countryNames.length === 0 && <h4 className={styles.message}>Sorry Ticket are not Available...</h4>
  )
}
export default Message
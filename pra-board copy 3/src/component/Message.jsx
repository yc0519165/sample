import styles from './Message.module.css'
function Message ({products}) {
  return(
    products.length ==0 && <h4 className={styles.message}>Thanks For Showing Interest for My Shop..</h4>

  )
}
export default Message
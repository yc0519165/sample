import styles from './Message.module.css'

function Message ({products}){
  return (
    products.length === 0 && <h4 className={styles.message}>Thanks for Shoping in our store</h4>
  )
}
export default Message
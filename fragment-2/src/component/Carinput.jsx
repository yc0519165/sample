import styles from './Carinput.module.css'
const Carinput = () =>{
  return <input className={styles.carinput} type="text" placeholder="Enter the car name.."
  onChange={(event) => console.log(event.
    
    
    target.value)}/>
}
export default Carinput
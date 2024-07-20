import styles from './Buttons.module.css'

const Buttons = () =>{

  let bttn = ['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.']

  return (<div className={styles.btncontainer}>
    {bttn.map((btttn) => (
      <button key={btttn} className={styles.btn}>{btttn}</button>
    ))}
         
  </div>

  )
  
}
export default Buttons
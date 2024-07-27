import styles from './Search.module.css'
const Search = ({hanleOnChange}) =>{
  
  return(
    <input className={styles.screen} type="text" placeholder="" onKeyDown={hanleOnChange}/>
  )
}
export default Search
// if change only the props name hanleOnChange TO hanleKeyChange
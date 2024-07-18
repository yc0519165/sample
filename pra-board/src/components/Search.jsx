import styles from './Search.module.css'
const Search = () =>{
  const onChange = (event) =>{
    console.log(event.target.value)
  }
  return(
    <input className={styles.screen} type="text" placeholder="" onChange={onChange}/>
  )
}
export default Search
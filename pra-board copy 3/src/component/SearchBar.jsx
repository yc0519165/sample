import styles from './SearchBar.module.css'


function SearchBar () {
  let display =(event)=>{
    console.log(event.target.value)
  }
  return(
    <input className={styles.search} type="text" placeholder="search product" onChange={display}/>
  )

}

export default SearchBar 
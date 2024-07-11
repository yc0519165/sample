import styles from './App.module.css'
import Display from './component/Display'
import Buttons from './component/Buttons'


function App() {

  return (
    <center>
    <div className={styles.calcontainer}>
      <Display></Display>
      <Buttons></Buttons>
    </div>
    </center>
  )
}

export default App

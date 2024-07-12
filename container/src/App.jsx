import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Container from './components/Container'

function App() {

  let cars = ['C class','E class','AMG','G wagon','CLA 650','Rocket']

  return (
    <Container>
      <h1>Merecedes Benz</h1>
      <input type="text" placeholder="text anything" className="screen" 
      onChange={(event) => console.log(event.target.value)} />
      <ul className="list-group">
        {cars.map((name) => {
            <li key={name}className="list-group-item">{name}
            <button type="button" className="btn btn-success"
            onClick={() => console.log(`${name}this is the data of cars`)}>Buy</button></li>
        })}
</ul>
    </Container>
  )
}

export default App

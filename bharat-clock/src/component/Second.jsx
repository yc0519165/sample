
const Second = () =>{

  let time = new Date()

  return  <span className='second'>This is the Current Time:{time.toLocaleDateString()}-{time.toLocaleTimeString()}</span>

}
export default Second
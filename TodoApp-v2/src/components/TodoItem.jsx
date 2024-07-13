
const TodoItem = () =>{
  return <div className="conatiner">
    <div className="row">
    <div className="col-sm"><input type="text" placeholder="Enter your todo..." /></div>
    <div className="col-sm"><input type="date" /></div>
    <div className="col-sm"><button type="button" className="btn btn-success">Add</button></div>
  </div>
  </div>
}
export default TodoItem
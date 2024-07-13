const AddTodo = () =>{
  return <div className="row">
    <div className="col-sm"><input type="text" placeholder="Enter your todo..."  /></div>
    <div className="col-sm"><input type="date"  /></div>
    <div className="col-sm"><button type="button" className="btn btn-success addbtn">Add</button></div>
  </div>

}
export default AddTodo
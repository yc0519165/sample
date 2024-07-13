function TodoItem ( {todoName, todoDate} )  {
  return (
  <div className="row">
    <div className="col-sm">{todoName}</div>
    <div className="col-sm">{todoDate}</div>
    <div className="col-sm"><button type="button" className="btn btn-danger addbtn">Delete</button></div>
  </div>
  )
}
export default TodoItem;
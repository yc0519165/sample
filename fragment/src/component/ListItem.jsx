const ListItem = () =>{

  let names = ['Mercedes Benz','Lamobrgini','B M W','T A T A','Huyndai','Walswalgan','Mahindra','Skoda']



  return  <ul className='list-group'>
    {names.map ((car) =>
    <li key={car} className="list-group-item Itms">{car}</li>)}
    </ul>
}
export default ListItem

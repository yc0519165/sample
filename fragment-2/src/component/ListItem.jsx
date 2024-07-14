import Item from "./Item"

const ListItem = () =>{
  let names = ['Mercedes Benz','Lamobrgini','B M W','T A T A','Huyndai','Walswalgan','Mahindra','Skoda']

  return  (
    <>
    <ul className='list-group'>
    {names.map ((car) =>
    <Item key={car} names={car}></Item>
    )}
    </ul>
    </>
  )
}
export default ListItem

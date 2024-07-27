import { createContext } from "react";
import { useReducer } from "react";

export const TodoItemsContex = createContext([]);

const todoItemReducer = (currentTodoItems, action) =>{

  let newTodoItem = currentTodoItems;
  if(action.type === "NEW_ITEM"){
    newTodoItem =[
      ...currentTodoItems,
       {name: action.payload.itemName, dueDate: action.payload.itemDueDate},
    ];
  }else if (action.type === "DELETE_ITEM"){
    newTodoItem = currentTodoItems.filter(
      (item) => item.name !== action.payload.itemName)
  }
  return newTodoItem;
}


const TodoItemsContexProvider = ({children}) =>{
  // const [todoItems, setTodoItems] = useState([])
  const [todoItems, dispatchTodoItem] = useReducer(todoItemReducer, [])

  const addNemItem = (itemName, itemDueDate) =>{
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDueDate
      },
    };
    dispatchTodoItem(newItemAction)
  }

  const deleteItem = (todoItemName) =>{
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName:todoItemName,
      },
    };
    dispatchTodoItem(deleteItemAction)
  }
  <TodoItemsContex.Provider
  value={{
   // this is shortcut code
   todoItems,
   addNemItem,
   deleteItem,

   // todoItems: todoItems,
   // addNemItem :addNemItem,
   // deleteItem :deleteItem,
   }}>
    {children}
   </TodoItemsContex.Provider>


}
export default TodoItemsContexProvider
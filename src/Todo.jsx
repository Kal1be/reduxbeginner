import React from 'react'
import { useSelector,useDispatch} from 'react-redux'
import { removeTodo } from './component/todoSlice'

function Todo() {
    
   const data = useSelector(state=>state.todos)

   const dispatch =useDispatch()
    console.log(data)
  return (
    <div>  
    {data.map(todo=>(
        <div>
        <ul>
            <li key={todo.id} className='flex justify-between my-3'>
                <div className='bg-slate-700 w-56 text-white font-bold px-3 mx-2'>{todo.text}</div>
                <button onClick={()=>{
                    dispatch(removeTodo(todo.id))
                }} className='bg-red-600 text-white font-bold p-2 rounded'>delete todo</button>
            </li>
        </ul>
        </div>
    ))}
    </div>
  )
}

export default Todo

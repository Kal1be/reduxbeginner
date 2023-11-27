import {useState} from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from './component/todoSlice'

function Addtodo() {
    const [input,setInput] =useState("")
    const dispatch = useDispatch()
    const handle =(e)=>{
        e.preventDefault()


        dispatch(addTodo(input))
        setInput("")
    }
  return (  
    <div className='flex justify-center'>
      <form onSubmit={handle} className='space-x-3 mt-12'>
   <input type='text' className='bg-gray-800 rounded border border-gray-800 focus:border-indigo-500
   focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8
   transition-colors duration-200 ease-in-out' placeholder='enter a todo ...'
    value={input}
    onChange={(e)=>setInput(e.target.value)
    }
   />
   <button type='submit' className='text-white bg-indigo-500 border-0 p-2 rounded'>
    create todo
   </button>
      </form>
    </div>
  )
}

export default Addtodo

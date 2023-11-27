import { useState } from 'react'
import './App.css'
import Addtodo from './Addtodo'
import Todo from './Todo'
function App() {

  return (
    <>
    <h3 className='text-center text-sky-500 font-extrabold text-2xl'>Enter your todo app</h3>
    <div>
    <Addtodo/>
   <div className='flex justify-center'>
   <Todo/>
   </div>
    </div>
  
    </>
  )
}

export default App

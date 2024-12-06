import React ,{useContext, useState} from 'react'
import crossIcon from './../assets/icon-cross.svg'
import checkIcon from './../assets/icon-check.svg'
import checkedIcon from './../assets/icon-check.svg'
import { ThemeContext } from '../App'

export default function TodoItem({todo, remove, switchTogelle}) {
    const [checked , setChecked] = useState(false)
    const {darkMode,setDarkMode} = useContext(ThemeContext)
  return (
    <li key={crypto.randomUUID()} onClick={()=> switchTogelle(todo.id)}  className={`flex justify-between items-center gap-5 px-[1rem] sm:px-[2.5rem] py-[1rem] cursor-pointer relative before:content-[''] before:absolute before:bottom-0 before:z-10 before:left-0 before:w-full before:h-[0.1rem]  ${darkMode?" before:bg-gray-lighter before:opacity-15":'before:bg-gray-darker before:opacity-25'}   	`}>
      <span className= {"w-[20px] sm:w-[30px] h-[20px] sm:h-[30px] m-0 p-0 aspect-square rounded-full relative  bg-gradient-to-br  from-sky-500 to-pink-500  cursor-pointer"}>
        <span className={`h-[16px] sm:h-[26px] w-[16px] sm:w-[26px] aspect-square absolute p-0 rounded-full inset-0 m-auto ${darkMode?'bg-purple-normal' :'bg-white' } ${todo.completed?'hidden' :''} `}></span> 
        <img className={`${todo.completed?'absolute inset-0 m-auto ':'hidden'}`} src={checkIcon} />
      </span>
      
      <span className={`w-full capitalize text-[0.9rem] sm:text-[1rem] font-medium  ${todo.completed? (darkMode?' text-gray-darker line-through ' :'text-gray-darker line-through'):(darkMode?' text-gray-lighter ' :'text-gray-lighter  ')} `}>{todo.body}</span>
      <button className='max-w-max' onClick={(e)=> {e.stopPropagation();remove(todo.id)}}><img src={crossIcon} /></button>
    </li>
  )
}

import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../App';
import { ItemContext } from './TodoProvider';


export default function TodoFooter({removeCompleted}) {
   const {items, filtredItems ,setFiltredItems} = useContext(ItemContext)
   const {darkMode,setDarkMode} =useContext(ThemeContext)
   const [tab, setTab] = useState(1)
   
  const AllItems = () =>{
    setFiltredItems(items)
  }
  const ActiveItems = () =>{
    setFiltredItems(items.filter(item => !item.completed))
  }
  const CompltedItems = () =>{
    setFiltredItems(items.filter(item => item.completed))
  }
  useEffect(()=>{
    setFiltredItems(items)
    switch (tab) {
      case 1:
        AllItems()
        break;
        case 2:
          ActiveItems()
          break;
          case 3:
            CompltedItems()
            break;
    }
  },[items])
 
  return (
    <ul className={`flex px-[1rem] sm:px-[2.5rem] rounded-bl-[4px] rounded-br-[4px] cursor-pointer  py-[1rem] relative before:content-[''] before:absolute   before:top-0 before:left-0 before:z-10 before:w-full before:h-[0.1rem]  ${ darkMode? 'bg-purple-normal before:bg-gray-lighter before:opacity-15' :'before:bg-gray-darker sm:bg-white before:opacity-25'} `}>
    <li className='font-thin flex-grow text-gray-darker	pl-2 text-[0.9rem] sm:text-[1rem]'>{items.length} items left</li>
    <li className={`flex justify-center items-center gap-6 sm:gap-1  cursor-pointer font-medium flex-grow absolute bottom-[-130%] left-0 w-full h-full  rounded-[4px]   z-40   sm:relative sm: sm:inset-0 sm:w-auto px-[1rem] sm:px-1 sm:justify-between  ${darkMode?'sm:bg-purple-normal bg-purple-normal border-0':'sm:bg-white bg-white border-2 sm:border-0'} `}>
    <span className={`text-[0.9rem] sm:text-[1rem] ${tab == 1?'text-blue-lighter':'text-gray-darker'}`} onClick={() =>{setTab(1) ;AllItems()}}>All</span>
   <span className={`text-[0.9rem] sm:text-[1rem] ${tab == 2?'text-blue-lighter':'text-gray-darker'}`} onClick={()=>{setTab(2); ActiveItems()}}>Active</span>
   <span className={`text-[0.9rem] sm:text-[1rem] ${tab == 3?'text-blue-lighter':'text-gray-darker '}`} onClick={()=>{setTab(3) ;CompltedItems()}}>Completed</span>
    </li>
    <li className='font-thin flex-grow text-right text-gray-darker text-[0.9rem] sm:text-[1rem]' onClick={removeCompleted}>clear completed</li>
  </ul>
  )
}


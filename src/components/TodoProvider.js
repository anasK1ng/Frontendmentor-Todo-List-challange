import TodoItem from './TodoItem'//import  {Transporter,SendMailOptions,createTransport} from 'nodemailer'
import React, {useMemo, useRef, useState, useReducer, Component, useEffect, useContext} from 'react'
import TodoFooter from './TodoFooter'
import lightIcon from './../assets/icon-sun.svg'
import moonIcon from './../assets/icon-moon.svg'
import { ThemeContext } from '../App'
export const ItemContext = React.createContext()
export default function TodoProvider() {
   
    const {darkMode,setDarkMode} = useContext(ThemeContext) 
    const [items,setItems] = useState([])
    const [filtredItems , setFiltredItems] = useState(items) 
    const [inputValue,setInputValue] = useState('')
    const [dispalyItems,SetDispalyItems] = useState([])
    const [querry,setQuerry] = useState('')
    const inputSearch = useRef()
    const item  = useRef()
    // const filtredTodos = useMemo(()=> {
    //   return items.filter(item => 
    //     { 
    //               return  (item.includes(querry))
    //     })
    // },[items,querry])
    
    const add = (e) =>{
      e.preventDefault()
     
      if(inputValue != "") { 
        setItems(()=> [...items, { id:crypto.randomUUID() , body: inputValue , completed: false}]  )
      }
      setInputValue('')
      
    }
    const switchTogelle = id => {
      setItems(items.map(item =>{
        if(item.id == id){
          
          return {...item, completed:!item.completed}
        }
        return item
      }
        ))
    }
    const remove = (id) => {
      setItems( items.filter( (item)=> id!=item.id))
    }
    const RemoveCompletedTodo = ()=>{
      setItems(items.filter(item=> !item.completed))
    }
  
    
  
    return (  
        
    <article  className="absolute top-[5%] sm:top-[10%] md:top-[15%] left-0 right-0 mx-auto w-[280px] sm:w-fit grid grid-cols-[280px] sm:grid-cols-[500px] grid-rows-[4rem,3rem,auto] " style={{boxShadow:'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px '}}>
        <div className='flex justify-between items-center pb-[3rem] sm:pb-[5rem] md:pb-[7rem] '>
          <span className='text-[1.5rem] sm:text-[3rem] tracking-[6px] sm:tracking-[8px] font-bold	text-slate-50 uppercase'>Todo</span>   
          <span onClick={() => setDarkMode(darkMode=>!darkMode)} className=' text-justify h-auto cursor-pointer'><img src={`${darkMode? lightIcon: moonIcon }`} /> </span>  
  
         </div>
        <form className={`h-[4rem] px-[1rem] sm:px-[2.5rem]  flex items-center rounded-[4px] relative before:content-[''] before:absolute   before:bottom-0 before:left-0 before:z-10 before:w-full before:h-[0.1rem] ${ darkMode? 'bg-purple-normal before:bg-gray-lighter before:opacity-15' :'bg-[white] before:bg-gray-darker before:opacity-25'}`} onSubmit={add} >
          <span  className= {"w-[20px] sm:w-[30px] h-[20px] sm:h-[30px] m-0  p-0 aspect-square rounded-full relative  bg-gradient-to-br  from-blue-lighter to-pink-500  cursor-pointer"}>
            <span className={`h-[16px] sm:h-[26px] w-[16px] sm:w-[26px] aspect-square absolute p-0 rounded-full inset-0 m-auto ${darkMode?'bg-purple-normal ' :'bg-white' }`}></span> 
          </span>
          <input type="text" onChange={(e)=> setInputValue(e.target.value)} value={inputValue} ref={item} className={`w-full focus:outline-none ml-[1rem] caret-blue-lighter ${darkMode?'bg-purple-normal !important text-gray-lighter !important':'bg-white text-gray-darker !important' }'`} placeholder="Create a new todo..." />
        </form>
        <ul className={`${ darkMode? 'bg-purple-normal' :'bg-[white]'} h-[21.5rem]  flex flex-col rounded-tl-[4px] rounded-tr-[4px] overflow-y-scroll no-scrollbar pt-[1rem] sm:pt-[1.3rem]`}   >
       {
          filtredItems.map((item) => {
           return <TodoItem key={crypto.randomUUID()}  todo={item} remove={remove} switchTogelle={switchTogelle} />        
          })
        }
        </ul>
        <ItemContext.Provider value={{items,filtredItems,setFiltredItems }}>
           <TodoFooter removeCompleted={RemoveCompletedTodo} />
        </ItemContext.Provider>
    </article>
   
    );

}

 

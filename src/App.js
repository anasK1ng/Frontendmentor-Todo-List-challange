import lightModeImage from './assets/bg-desktop-light.jpg'
import lightModeSmallScreenImage from './assets/bg-mobile-light.jpg'
import darkModeSmallScreenImage from './assets/bg-mobile-dark.jpg'
import darkModeImage from './assets/bg-desktop-dark.jpg'
import React, { useEffect, useState } from 'react'
import TodoProvider from './components/TodoProvider'
import { defaults } from 'autoprefixer'
export const ThemeContext = React.createContext()
function App(){
  const [darkMode,setDarkMode] = useState(false)
  const [screenSize, setScreenSize] =useState(window.innerWidth)
  const handleScreenSize = ()=>{
    setScreenSize(window.innerWidth)
  }
  useEffect(()=>{
    window.addEventListener('resize',handleScreenSize)
  },[])

  return(
  <ThemeContext.Provider value={{darkMode,setDarkMode}}>
    <section className='flex flex-col h-screen relative'>
      <article className='grow-0' ><img className='w-full  h-auto object-cover' src={darkMode ? (screenSize > 900 ? darkModeImage : darkModeSmallScreenImage ) : (screenSize > 900 ?lightModeImage:lightModeSmallScreenImage)} /></article>
      <article className={`flex-1  flex-grow ${darkMode? "bg-purple-darker":""}`}></article>
      <TodoProvider />
    </section>
  </ThemeContext.Provider>

  )
}
export default App;







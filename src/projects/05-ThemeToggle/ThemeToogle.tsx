import { createContext,useState } from "react"

import Blog from "./Blog"
export const  ThemeContext=createContext({})
const ThemeToogle = () => {
    const [theme,setTheme]=useState("#fff")

    const clickHandler=()=>{
            
        const newTheme=theme==="#fff"?"#000":"#fff"
        console.log("clicked",newTheme)
        setTheme(newTheme)
        document.body.style.backgroundColor=newTheme
    }

  return (
    <div>
        <ThemeContext value={theme}>
            <Blog handleClick={clickHandler}/>
        </ThemeContext>
    </div>
  )
}

export default ThemeToogle
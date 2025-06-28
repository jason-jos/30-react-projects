import { useContext } from "react"
import { Title } from "../../components/Title"
import { ThemeContext } from "./ThemeToogle"

const Blog = ({handleClick}) => {
    const data=useContext(ThemeContext)
  return (
    <div>
        <Title title={"App"} classes={`text-3xl text-center mt-10 ${data==='#000'?"text-white":"text-black"}`}/>
        <Title title={`${data}`}  classes={`text-xl text-center mt-20 ${data==='#000'?"text-white":"text-black"}`}/>
        <button className="px-4 py-2 bg-blue-600 text-black rounded-md absolute right-10 top-10"
        onClick={handleClick}
        >
            click
        </button>
    </div>
  )
}

export default Blog
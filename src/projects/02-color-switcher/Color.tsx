import { Title } from "../../components/Title"

export const Color = () => {
  
  function generateHex(){
    const num="0123456789ABCDEF"
    let color="#"
    for(let i=0;i<6;i++){
      color+=num[Math.floor(Math.random()*num.length)]
    }
    return color
  }

  const handleOnClick=()=>{
    const body=document.querySelector('body')!  // Use ! for non-null assertion 
    body.style.backgroundColor=generateHex()
    
  }
  return (
    <>
    <Title classes={"font-bold text-center text-3xl mt-10"} title={"Color"}/>
    <div className="flex justify-center h-screen items-center">
      <button className="px-4 py-2 border-2 shadow rounded-sm" onClick={handleOnClick}>Click</button>
    </div>
    </>
  )
}

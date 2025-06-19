import { useState } from "react"
import { Title } from "../../components/Title"

export const ESignature = () => {
  document.body.style.backgroundColor="#fefe1"
  const [name,setName]=useState("Name")
  const [date,setDate]=useState("Name")

  function handleInputChange(e:React.ChangeEvent<HTMLInputElement>){
    setName(e.target.value)
  }
  function handleDateChange(e:React.ChangeEvent<HTMLInputElement>){
    setDate(e.target.value)
  }

  return (
    <div className="text-center">
      <Title title={name} classes={"text-4xl font-bold text-gray-500 mt-10"}/>
      <Title title={date} classes={"text-2xl font-bold text-gray-500 mt-10"}/>
      <div className="mt-20 px-5 text-center">
        <p className="text-xl italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum fugiat fuga autem ex soluta, nesciunt rem dolorem quam recusandae debitis! Quidem labore voluptatem id repellat vel explicabo laudantium aliquam enim?</p>
      </div>
      <div className="flex justify-between space-x-5 absolute  left-0 right-0  bottom-4 px-4 mb-3">
        <input type="date" name="" id="" value={date} className="e-input" onChange={handleDateChange}/>
        <input type="text" className="e-input" placeholder="Name"  value={name} onChange={handleInputChange} />
      </div>
    </div>
  )
}

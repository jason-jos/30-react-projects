
type Props={
    btnName:string,
    classes:string
}
export const Button = ({btnName,classes}:Props) => {
  return (
    <button 
        className={`px-4 py-2 bg-black text-white rounded-md ${classes}`}>
        {btnName}
    </button>
  )
}

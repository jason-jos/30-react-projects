
type props={
    title:string
    classes:string
}

export const Title = ({title,classes}:props) => {
  return (
    <div>
        <h1 className={classes}>{!title?"Name":title}</h1>
    </div>
  )
}

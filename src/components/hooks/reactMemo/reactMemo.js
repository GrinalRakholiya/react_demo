import { useState } from "react"
import Test from "./reactMemoChild"

function ReactMemo(){
    const[count,setCount]=useState(0)
    const [data, setData] = useState(1)
    function increment(){
        setData(2)
        setCount(count+1)
    }
    return(
        <>
        <Test data={data}/>
        <button onClick={()=>increment()}>Count {count}</button>
        </>
    )
}
export default ReactMemo
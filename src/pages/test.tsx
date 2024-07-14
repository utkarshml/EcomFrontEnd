// import { useState } from "react"
import { Button } from "../components/ui/button"
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../App/store";
import { useDispatch } from "react-redux";
import { increament , decreament } from "../features/Counter";

function Test() {
    // const [value , setValue] = useState<number>(0);
    const dispatch : AppDispatch = useDispatch()
    const NumValue : number = useSelector((state : RootState )  => {
       return state.conter.value
    })

   
  return (
    <div>
      <div>{NumValue}</div>
      <Button onClick={()=>dispatch(increament())}>Increament</Button> 
      <Button onClick={()=> dispatch(decreament())}>Decreament</Button>
    </div>

  )
}

export default Test
import { Link } from "react-router-dom"
import { Separator } from "./ui/separator"
import { ChevronRight } from "lucide-react"
import React, {  useState } from "react"
import { Card } from "./ui/card"


function MenuComponent() {
  const [OnOpen  , OnClose] = useState<boolean>(false)
  const OnMouseEnter = () =>{
    OnClose(true)
  }
  const OnMoudeLeave = () =>{
    OnClose(true)
  }
  return (
    <div className="grid grid-cols-4">
      <div className="assortment flex flex-col justify-center items-start w-full">
        <h3 className="scroll-m-20 w-full text-start border-primary border-b-2 text-2xl font-semibold tracking-tight">
          Assortment
        </h3>
        <div className="flex flex-col gap-3 w-full mt-3">
          <Link className="font-bold text-start w-full" to={"/"}>Value of the Day</Link>
          <Separator />
          <Link className="font-bold text-start w-full" to={"/"}>Top 100 Offers</Link>
          <Separator />
          <Link  className="font-bold text-start w-full" to={"/"}>New Arrivals</Link>
          <Separator />
          <div className="relative" >
            <Link onMouseEnter={OnMouseEnter}  onMouseLeave={OnMoudeLeave} className=" flex justify-between px-0 text-start w-full" to={"/"}><span>Mobiles & Tablets</span> <ChevronRight/></Link>
       <SidePannel>
            <Card  className="col-span-2  h-[8rem] bg-cover">
              hello
            </Card>
            </SidePannel> 
          </div>
          <Separator />
          <Link  className="font-bold text-start w-full" to={"/"}>New Arrivals</Link>
          <Separator />
        </div>

      </div>
     <div className="shop-contaner ">

      </div>
    </div>
  )
}
interface SidePannelProp {
  children : React.ReactNode
}
const SidePannel : React.FC<SidePannelProp> = ({ children}) =>{
 return (
  <div className="absolute -right-[5rem] -top-[3rem] animate-accordion-up " >
    {children}
  </div>
 )
}
export default MenuComponent
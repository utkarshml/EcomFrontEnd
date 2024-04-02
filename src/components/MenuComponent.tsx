import { Link } from "react-router-dom"
import { Separator } from "./ui/separator"
import { ArrowRight, ChevronRight, ShoppingCart } from "lucide-react"
import { Card } from "./ui/card"
import { Button } from "./ui/button"
import { AspectRatio } from "@radix-ui/react-aspect-ratio"
import sampleImge from "../images/prodcut6-300x300.webp"
import React, { useEffect, useState } from "react"
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "./ui/pagination"
import Star from "./Star"

const sampleData : MyCardProps[] = [
  {
    "lable": "Shirt",
    "name": "T-shirt",
    "image": sampleImge,
    "price": 19.99,
    "_id": "12345"
  },
  {
    "lable": "Dress",
    "name": "Summer Dress",
    "image": sampleImge,
    "price": 49.99,
    "_id": "67890"
  },
  {
    "lable": "Book",
    "name": "The Hitchhiker's Guide to the Galaxy",
    "image": sampleImge,
    "price": 12.99,
    "_id": "90123"
  },
  {
    "lable": "Headphones",
    "name": "Wireless Noise-Cancelling Headphones",
    "image": sampleImge,
    "price": 199.99,
    "_id": "34567"
  },
  {
    "lable": "Watch",
    "name": "Smart watch",
    "image": sampleImge,
    "price": 249.99,
    "_id": "78901"
  }
  
  ,
  {
    "lable": "Watch",
    "name": "Smart watch",
    "image": sampleImge,
    "price": 249.99,
    "_id": "78901"
  }
  
  ,
  {
    "lable": "Watch",
    "name": "Smart watch",
    "image": sampleImge,
    "price": 249.99,
    "_id": "78901"
  }
  
  ,
  {
    "lable": "Watch",
    "name": "Smart watch",
    "image": sampleImge,
    "price": 249.99,
    "_id": "78901"
  }
  
]

function MenuComponent() {
  return (
    <div className="grid lg:grid-cols-4 grid-cols-1  gap-5">
      <div className="assortment hidden  lg:visible lg:flex flex-col  items-start w-full">
        <h3 className="scroll-m-20 w-full text-start border-primary border-b-2 text-2xl font-semibold tracking-tight">
          Assortment
        </h3>
        <div className="flex flex-col  gap-3 w-full mt-3">
          <Link className="font-bold text-start w-full" to={"/"}>Value of the Day</Link>
          <Separator />
          <Link className="font-bold text-start w-full" to={"/"}>Top 100 Offers</Link>
          <Separator />
          <Link  className="font-bold text-start w-full" to={"/"}>New Arrivals</Link>
          <Separator />
          <Link  className="font-thin flex justify-between text-start w-full" to={"/"}><span>Computers & Accessories</span>  <ChevronRight/> </Link>
          <Separator />
          <Link  className="font-thin flex justify-between text-start w-full" to={"/"}><span>Cameras, Audio & Video</span>  <ChevronRight/> </Link>
          <Separator />
          <Link  className="font-thin flex justify-between text-start w-full" to={"/"}><span>Mobiles & Tablets</span>  <ChevronRight/> </Link>
          <Separator />
          <Link  className="font-thin flex justify-between text-start w-full" to={"/"}><span>Movies, Music & Video Games</span>  <ChevronRight/> </Link>
          <Separator />
          <Link  className="font-thin flex justify-between text-start w-full" to={"/"}><span>TV & Audio</span>  <ChevronRight/> </Link>
          <Separator />
        </div>

      </div>
     <div className="shop-contaner p-4 lg:p-0 col-span-3 ">
     <h3 className="scroll-m-20 w-1/3 px-3   text-start border-primary border-b-2 text-2xl font-semibold tracking-tight">
     Value of the Day
        </h3>
        <div className="  p-5 grid gap-3 lg:grid-cols-4 grid-cols-1 sm:grid-cols-2  md:grid-cols-3 w-full">
        {sampleData.map(i=>(
        <MyCard lable={i.lable} image={i.image} name={i.name} price={i.price} _id={i._id} />
        ))}
     
        </div>
        <Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>

      </div>
    </div>
  )
}
interface MyCardProps {
  lable : string,
  name : string,
  image  : string ,
  price : number ,
  _id : string
}

const MyCard:React.FC<MyCardProps> = ({lable ,image , name , price ,_id}) =>{
  const [font , setFont] = useState<string>("");
  useEffect(()=>{
    const fontTurncate = (font : string, maxWidth : number) : string =>{
      let  str : string = "";
      if(font.length > maxWidth){
        for(let i = 0; i < maxWidth; i++){
      
          str += font.charAt(i); 
     }
      }
      else {
          return font
      }
     return `${str}...`;
    }
    setFont(fontTurncate(name , 25));
  },[name])


  return (
    <Link className=" group/item hover:z-[999]" to={"/id"}>
    <Card   className=" relative bg-secondary transition   group-hover/item:scale-110 col-span-1 p-3 shadow-lg h-auto m-2 bg-cover">
    <Button asChild className="w-full" variant={"link"}><Link to={"/"}>
    {lable}
    </Link></Button>
    <div className="h-12">
    <Link className="text-sm min-h-2 uppercase hover:text-primary" to={"/"}>
   {font}
    </Link>
    </div>

    <AspectRatio>
      <img src={image} alt={name} />
    </AspectRatio>
    <div className="py-3 flex">
    <Star value={4} isEdit={false} colors={[ "red", "orange",]}/> <span className="text-gray-500">(24)</span>
    </div>
 
   <h4 className="text-start" >${price}</h4>
   <div className="w-full flex justify-between my-3">
    <Button className="rounded-full transition invisible group-hover/item:visible" variant={"destructive"}><Link to={"/"}><ShoppingCart/></Link></Button>
   <Button asChild variant={"default"}><Link to={`/${_id}`}><ArrowRight /></Link></Button>
   </div>
    <div className="flex group/edit invisible group-hover/item:visible">
  <Link to={"/"}></Link>
 </div>
 <div className="flex bg-secondary invisible group-hover/item:visible absolute flex-col left-0 -bottom-[22%] z-50 rounded-lg gap-3 border-primary border w-full" >
  <Link className=" hover:bg-primary rounded-tl-md rounded-tr-md py-1 text-foreground" to={"/"}>Compair</Link>
  <Link className="py-1 hover:bg-primary  rounded-bl-md rounded-br-md text-foreground" to={"/"}>Favourite</Link>
 </div>
 </Card>
 </Link>
  )
}
export default MenuComponent
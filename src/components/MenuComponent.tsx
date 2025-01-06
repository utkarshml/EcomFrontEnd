import { Link } from "react-router-dom"
import { Separator } from "./ui/separator"
import { ArrowRight, ChevronRight, ShoppingCart } from "lucide-react"
import { Card } from "./ui/card"
import { Button } from "./ui/button"
// import sampleImge from "../images/prodcut6-300x300.webp"
import React, { useEffect, useState } from "react"
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "./ui/pagination"
import Star from "./Star"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../App/store"
import { AddCart } from "../features/CartSlice"
import { addWish, deleteWish } from "../features/WishList"

const sampleData : MyCardProps[] = [
  {
    "lable": "Smartphone",
    "name": "iPhone 14 Pro", 
    "image": "https://images.unsplash.com/photo-1678652197831-2d180705cd2c?w=300&h=300&fit=crop",
    "price": 999.99,
    "_id": "iphone14pro"
  },
  {
    "lable": "Laptop",
    "name": "MacBook Air M2",
    "image": "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=300&h=300&fit=crop",
    "price": 1299.99,
    "_id": "macbookair"
  },
  {
    "lable": "Headphones", 
    "name": "Sony WH-1000XM4",
    "image": "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=300&h=300&fit=crop",
    "price": 349.99,
    "_id": "sonywh1000"
  },
  {
    "lable": "Smartwatch",
    "name": "Apple Watch Series 8",
    "image": "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=300&h=300&fit=crop",
    "price": 399.99,
    "_id": "applewatch8"
  },
  {
    "lable": "Camera",
    "name": "Sony A7 IV",
    "image": "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=300&h=300&fit=crop",
    "price": 2499.99,
    "_id": "sonya7iv"
  },
  {
    "lable": "Gaming Console",
    "name": "PlayStation 5",
    "image": "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=300&h=300&fit=crop",
    "price": 499.99,
    "_id": "ps5"
  },
  {
    "lable": "Tablet",
    "name": "iPad Pro 12.9",
    "image": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=300&h=300&fit=crop",
    "price": 1099.99,
    "_id": "ipadpro"
  },
  {
    "lable": "Speaker",
    "name": "Sonos One",
    "image": "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=300&h=300&fit=crop",
    "price": 219.99,
    "_id": "sonosone"
  }
]

function MenuComponent() {
  return (
    <div className="grid px-5 lg:grid-cols-4 grid-cols-1  gap-5">
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
     <h3 className="scroll-m-20 lg:w-1/3 px-3   text-start border-primary border-b-2 text-2xl font-semibold tracking-tight">
     Value of the Day
        </h3>
        <div className="  p-3 grid gap-3 lg:grid-cols-4 grid-cols-1 sm:grid-cols-2  md:grid-cols-3 w-full">
        {sampleData.map((i , index)=>(
        <MyCard  key={index} lable={i.lable} image={i.image} name={i.name} price={i.price} _id={i._id} />
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

export const MyCard:React.FC<MyCardProps> = ({lable ,image , name , price ,_id}) =>{
  const [font , setFont] = useState<string>("");
  const [wish ,setWish] = useState<boolean>(false)
  const dispatch : AppDispatch = useDispatch()
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
const AddCartFunction = () =>{
      dispatch(AddCart({
        name , _id , price, image,lable
      }))
}
const  addWishHandler = () =>{
     dispatch(addWish({
      name , _id , price, image,lable
     }))
     setWish(true)
}
const deleteWishHandler = () =>{
  dispatch(deleteWish({
    name , _id , price, image,lable
  }))
  setWish(false)
}
  return (
   
    <Card   className=" group/item hover:z-[999]  relative bg-secondary transition  flex flex-col  group-hover/item:scale-110 col-span-1 p-3 shadow-lg h-auto m-2 bg-cover">
    <Button asChild className="w-full" variant={"link"}><Link to={"/"}>
    {lable}
    </Link></Button>
    <div className="h-12">
    <Link className="text-sm min-h-2 uppercase hover:text-primary" to={"/"}>
   {font}
    </Link>
    </div>
    <Link to={"/shop/id"}>
      <img className="m-auto" src={image} alt={name} />
      </Link>
    <div className="py-3 flex justify-between">
      <div className="flex gap-2">
      <Star value={4} isEdit={false} colors={[ "red", "orange",]}/> <span className="text-gray-500">(24)</span> 
      </div>
      { wish ? 
       <button  onClick={()=>deleteWishHandler()}  className="mr-1">
      ❤️
      </button> : 
      <button onClick={()=>{addWishHandler()}}   className="mr-1">
      🤍
      </button>
      }
    </div>
 
   <h4 className="text-start" >${price}</h4>
   <div className="w-full flex justify-between my-3">
    <Button asChild onClick={AddCartFunction} className="rounded-full transition invisible group-hover/item:visible" variant={"destructive"}><Link to={"/"}><ShoppingCart/></Link></Button>
   <Button asChild variant={"default"}><Link to={`/${_id}`}><ArrowRight /></Link></Button>
   </div>
    <div className="flex group/edit invisible group-hover/item:visible">
  <Link to={"/"}></Link>
 </div>
 </Card>

  )
}
export default MenuComponent
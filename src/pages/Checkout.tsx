import { Trash2 } from "lucide-react"
import Header from "../components/Header"
import { Button } from "../components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table"

import { Separator } from "../components/ui/separator"
import { useSelector } from "react-redux"
import { RootState } from "../App/store"
import { useDispatch } from "react-redux"
import { DeleteCart } from "../features/CartSlice"


function Checkout() {

  const TotalMoney = useSelector((state : RootState)=>{
    let value : number =  0;
    state.cart.forEach(item => value += item.totalPrice)
    return value
  })
  return (
    <>
    <Header/>
    <div  className="grid grid-cols-3">
        <div className="col-span-2 p-5 ">
            <h3 className="text-4xl text-primary text-start font-bold  ">Cart</h3>
            <div className="p-2">
             <CartCard/>
            </div>
        </div>
        <div className="col-span-1 border p-4">
          <h2 className="text-start text-3xl font-semibold">Order Info </h2>
          <div className="flex flex-col gap-3  justify-center px-2 pt-5 items-center">
           <div className="flex w-full justify-between">
            <span className="text-2xl">Total</span>
            <span className="text-2xl">${TotalMoney}</span>
           </div>
           <div className="flex w-full justify-between">
            <span className="text-md">Tax</span>
            <span className="text-md">${(10 / 100 * TotalMoney).toFixed(2)}</span>
           </div>
           <div className="flex w-full justify-between">
            <span className="text-md">CGST</span>
            <span className="text-md">${(5 / 100 * TotalMoney).toFixed(2)}</span>
           </div>
           <div className="flex w-full justify-between">
            <span className="text-md">SGST</span>
            <span className="text-md">${(5 / 100 * TotalMoney).toFixed(2)}</span>
           </div>
           <Separator/>
           <div className="flex w-full justify-between">
            <span className="text-2xl">Total</span>
            <span className="text-2xl">${5 / 100 * TotalMoney +5 / 100 * TotalMoney + TotalMoney}</span>
           </div>
           <Button className="w-full">Checkout</Button>
          </div>
        </div>

    </div>
    </>
  )
}
 
const CartCard = () =>{
const dispatch = useDispatch();
 const CartData = useSelector((state : RootState)=>{
  return state.cart
})

    return (
        <>
       <Table className="px-4">
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Product</TableHead>
      <TableHead>Name</TableHead>
      <TableHead>Qty</TableHead>
      <TableHead className="text-right">Amount</TableHead>
      <TableHead className="text-right">Total</TableHead>
      <TableHead className="text-right">Delete</TableHead>
      
    </TableRow>
  </TableHeader>
  <TableBody>
    {CartData.map(item =>(
          <TableRow key={item.item._id}>
          <TableCell className="font-medium"><img src={item.item.image} alt="" className="rounded-md" /></TableCell>
          <TableCell className="text-start font-bold">{item.item.name}</TableCell>
          <TableCell className="text-start">{item.totalItems}</TableCell>
          <TableCell className="text-right">${item.item.price}</TableCell>
          <TableCell className="text-right">${item.totalPrice}</TableCell>
          <TableCell className="text-right"><Button onClick={()=>dispatch(DeleteCart(item.item))}><Trash2 /></Button></TableCell>
        </TableRow>
    ))}
  </TableBody>
</Table>

        </>
    )
}

export default Checkout
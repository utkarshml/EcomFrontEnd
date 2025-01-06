import React from 'react'
import Header from '../components/Header'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table'
import { useSelector } from 'react-redux'
import { RootState } from '../App/store'
import { deleteWish } from '../features/WishList'
import { Button } from '../components/ui/button'
import { useDispatch } from 'react-redux'
import { Trash2 } from 'lucide-react'

function Wishlist() {
    const WishListData = useSelector((state : RootState)=>{
        return state.wish
    })
    const dispatch = useDispatch();
  return (
    <>
    <Header/>
    <div className='px-6'>
    <Table className="px-4">
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Product</TableHead>
      <TableHead>Name</TableHead>
      <TableHead className="text-right">Amount</TableHead>
      <TableHead className="text-right">Delete</TableHead>
      
    </TableRow>
  </TableHeader>
  <TableBody>
    {WishListData.map(item =>(
          <TableRow key={item.item._id}>
          <TableCell className="font-medium"><img src={item.item.image} alt="" className="rounded-md" /></TableCell>
          <TableCell className="text-start font-bold">{item.item.name}</TableCell>
          <TableCell className="text-right">${item.item.price}</TableCell>
          <TableCell className="text-right"><Button onClick={()=>dispatch(deleteWish(item.item))}><Trash2 /></Button></TableCell>
        </TableRow>
    ))}
  </TableBody>
</Table>
    </div>
    </>
  )
}

export default Wishlist
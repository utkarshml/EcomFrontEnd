import {createSlice, PayloadAction} from "@reduxjs/toolkit"

const initialState: CartItems[] = [];

interface CartProduct {
    _id : string,
    lable : string,
    image : string
    name : string
    price : number,
}
interface CartItems {
    item : CartProduct,
    totalItems : number,
    totalPrice : number
}

// lable ,image , name , price ,_id
const CartSlice = createSlice({
    name : "Cart",
    initialState,
    reducers : {
        AddCart : (state , action : PayloadAction<CartProduct>)=>{
        const product = state.findIndex((item)=>item.item._id === action.payload._id)
        if(product == -1){
            const cartItemData : CartItems = { item : action.payload , totalItems : 1 , totalPrice : action.payload.price}
            state.push(cartItemData)
        }else{
            state[product].totalItems += 1,
            state[product].totalPrice += action.payload.price
        }
        },
        DeleteCart : (state  , action : PayloadAction<CartProduct>)=>{
            const product = state.findIndex((item)=>item.item._id === action.payload._id)
            if(!(product == -1)){
                state.splice(product,1);
            }
        }
    }

})

export const { AddCart , DeleteCart } = CartSlice.actions
export default CartSlice
import {createSlice, PayloadAction} from "@reduxjs/toolkit"

const initialState: WishItems[] = [];

interface CartProduct {
    _id : string,
    lable : string,
    image : string
    name : string
    price : number,
}
interface WishItems {
    item : CartProduct,
    isWish  : boolean,
}


const wishSlice = createSlice({
    name : "Wishlist",
    initialState,
    reducers : {
        addWish : (state , action : PayloadAction<CartProduct>)=>{
        const product = state.findIndex((item)=>item.item._id === action.payload._id)
        if(product == -1){
            const cartItemData : WishItems = { item : action.payload , isWish : true}
            state.push(cartItemData)
        }
        },
        deleteWish : (state  , action : PayloadAction<CartProduct>)=>{
            const product = state.findIndex((item)=>item.item._id === action.payload._id)
            if(!(product == -1)){
                state.splice(product,1);
            }
        }
    }

})

export const { addWish , deleteWish } = wishSlice.actions
export default wishSlice
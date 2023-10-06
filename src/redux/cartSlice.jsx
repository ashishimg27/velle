import { createSlice } from "@reduxjs/toolkit";

const initialvalue = JSON.parse(localStorage.getItem('cart')) ?? {items: [],
totalCount : 0};
// console.log(initialvalue);

const cartSlice = createSlice({
    name: 'cart',
    initialState :{
        ...initialvalue,
    },
    reducers : {
        addToCart(state, action){
            let find = state.items.findIndex((item)=>item.id === action.payload.id);
            if(find >= 0){
                state.items[find].quantity += 1;
            }
            else{
                state.items.push(action.payload);
            }

            let length = 0;
            state.items.map((val)=>{
                length += val.quantity;
            })
            state.totalCount = length;
        },
        deleteItemFromCart(state,action){
            let find = state.items.findIndex((item)=>item.id === action.payload.id)

            if(state.items[find].quantity > 1){
                state.items[find].quantity -= 1;
                state.totalCount-=1
            }
            else{
                state.items = state.items.filter(item => item.id !== action.payload.id);
                state.totalCount-=1
            }
        },
        deleteFromCart(state,action){
            let find = state.items.findIndex((item)=>item.id === action.payload.id)
            let removeQuantity = state.items[find].quantity;
            state.items = state.items.filter(item => item.id !== action.payload.id);
            state.totalCount-= removeQuantity;
        }
    }
})

export const {addToCart, deleteFromCart, deleteItemFromCart} = cartSlice.actions;

export default cartSlice.reducer;
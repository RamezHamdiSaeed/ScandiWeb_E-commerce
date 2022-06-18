import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],//items in the basket
    noOfItemsInBasket:0
};

export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        //! we need to check whether the item is already in the basket before dispatching the action 
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        addToCart:(state, action)=>{
            state.items[state.noOfItemsInBasket]=Object.assign({},state.items[state.noOfItemsInBasket],action.payload);
            state.noOfItemsInBasket+=1;
        },
        removeFromCart:(state)=>{ 
        state.items.pop();
        }
    }
});
//* we need to use these object for class components not for function components (as usual)
export const { actions,reducer } = basketSlice;
export const { addItem , addToCart,removeFromCart} = actions;
export default reducer;
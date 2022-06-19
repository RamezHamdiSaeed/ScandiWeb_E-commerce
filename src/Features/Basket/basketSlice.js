import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],//items in the basket
    currentItem: {},//current item being added to the basket
    currency: "$",//currency
};

export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        //! we need to check whether the item is already in the basket before dispatching the action 
        addItem: (state, action) => {
            state.items.forEach(element => {
                if ((element.name === action.payload.name) && (element.company === action.payload.company)) {
                    element.quantity += 1;
                    return;
                }
            });
            state.items.push(Object.assign({},state.currentItem,action.payload));
        },
        changeCurrentItem: (state, action) => {
            state.currentItem = action.payload;
        },
        changeCurrency: (state, action) => { 
            state.currency = action.payload;
        }
    }
    
});
//* we need to use these object for class components not for function components (as usual)
export const { actions,reducer } = basketSlice;
export const { addItem, changeCurrentItem,changeCurrency} = actions;
export default reducer;
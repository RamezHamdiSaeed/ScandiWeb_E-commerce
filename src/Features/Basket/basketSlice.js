import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],//items in the basket
};

export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        //! we need to check whether the item is already in the basket before dispatching the action 
        addItem: (state, action) => {
            state.items.push(action.payload);
        }
    }
});
//* we need to use these object for class components not for function components (as usual)
export const { actions,reducer } = basketSlice;
export const { addItem } = actions;
export default reducer;
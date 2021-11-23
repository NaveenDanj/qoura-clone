import { createSlice } from "@reduxjs/toolkit";

export const OtherModalSlice = createSlice({

    name : 'OtherModal',
    
    initialState : {
        addAnswer : false
    
    },

    reducers : {

        setVisibleAddAnswer : (state , action) => {

            state.addAnswer = action.payload;

        }

    }

});

export const { setVisibleAddAnswer } = OtherModalSlice.actions;
export default OtherModalSlice.reducer
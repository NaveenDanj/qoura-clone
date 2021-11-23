import { createSlice } from "@reduxjs/toolkit";

export const OtherModalSlice = createSlice({

    name : 'OtherModal',
    
    initialState : {
        addAnswer : false,
        questionDetails : false
    
    },

    reducers : {

        setVisibleAddAnswer : (state , action) => {

            state.addAnswer = action.payload;

        },

        setVisibleQuestionDetails : (state , action) => {
            state.questionDetails = action.payload;
        }

    }

});

export const { setVisibleAddAnswer , setVisibleQuestionDetails } = OtherModalSlice.actions;
export default OtherModalSlice.reducer
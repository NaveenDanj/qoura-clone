import { createSlice } from "@reduxjs/toolkit";

export const EditAccountInputSlice = createSlice({
    
    name : 'EditAccountInputSlice',
    initialState : {
        ModalOpen : false
    },

    reducers : {

        setEditeProfileModelShow : (state , action) => {
            state.ModalOpen = action.payload;
        }

    }

});

export const {setEditeProfileModelShow} = EditAccountInputSlice.actions;
export default EditAccountInputSlice.reducer;

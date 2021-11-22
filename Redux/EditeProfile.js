import { createSlice } from '@reduxjs/toolkit'


export const editeProfileModelSlice = createSlice({

    name : 'editeProfileModel',
    initialState : {
        value : false
    },

    reducers : {

        setShow : (state , action) => {
            state.value = action.payload;
        }

    }

});

export const {setShow} = editeProfileModelSlice.actions;

export default editeProfileModelSlice.reducer;
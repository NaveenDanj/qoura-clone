import {configureStore } from '@reduxjs/toolkit';
import editProfileModelReducer from './EditeProfile';
import EditAccountInputReducer from './EditAccountInput';



export default configureStore({
    reducer : {
        editProfileModel : editProfileModelReducer,
        editAccountInputModal : EditAccountInputReducer
    } 
})
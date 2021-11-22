import {configureStore } from '@reduxjs/toolkit';
import editProfileModelReducer from './EditeProfile';

export default configureStore({
    reducer : {
        editProfileModel : editProfileModelReducer
    } 
})
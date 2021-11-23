import {configureStore } from '@reduxjs/toolkit';
import editProfileModelReducer from './EditeProfile';
import EditAccountInputReducer from './EditAccountInput';
import OtherModalsReducer from './OtherModals';


export default configureStore({
    reducer : {
        editProfileModel : editProfileModelReducer,
        editAccountInputModal : EditAccountInputReducer,
        otherModals : OtherModalsReducer
    } 
})
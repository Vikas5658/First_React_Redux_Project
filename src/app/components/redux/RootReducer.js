
import userReducer from './Reducer';
import { combineReducers } from '@reduxjs/toolkit';


const rootReducer = combineReducers({
    user:userReducer
    
    
});



export default rootReducer;
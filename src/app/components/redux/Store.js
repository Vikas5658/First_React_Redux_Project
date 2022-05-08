
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './RootReducer';
import { configureStore } from '@reduxjs/toolkit'
import {
  getFirebase,
  actionTypes as rrfActionTypes,
} from 'react-redux-firebase'
import { constants as rfConstants } from 'redux-firestore'

const middleware = [thunk];
if(process.env.NODE_ENV === 'development'){
    middleware.push(logger);
}

// export const store = configureStore (rootReducer, applyMiddleWare(...middleware));

// export const store = configureStore({
//     reducer: rootReducer,
//     middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
//   })
const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false
      }),
  })
  
  export default store
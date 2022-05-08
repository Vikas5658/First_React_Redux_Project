import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const mailSlice = createSlice({
  name: 'mail',
  initialState:{    
    sendMessageIsOpen:true,
  },  
  reducers: {       
      openSendMessage: (state) => {      
      state.sendMessageIsOpen = true;
    },    
      closeSendMessage: (state) => {      
      state.sendMessageIsOpen = false;
    },    
  },  
  
});



export const {selectMail, openSendMessage, closeSendMessage  } = mailSlice.actions;

export const selectSendMessageIsOpen = (state) => state.mail.SendMessageIsOpen;

export default mailSlice.reducer;

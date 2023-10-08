import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
const { createSlice, nanoid } = require('@reduxjs/toolkit');

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [] },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: { id: nanoid(), name, number },
        };
      },
    },

    deleteContact(state, action) {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['items'],
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
export const { addContact, deleteContact } = contactsSlice.actions;

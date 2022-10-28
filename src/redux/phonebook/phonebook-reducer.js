import { createReducer } from '@reduxjs/toolkit';
import { changeFilter } from './phonebook-actions';

const filterReducer = createReducer('', {
  [changeFilter]: (_, action) => action.payload,
});

export default filterReducer;

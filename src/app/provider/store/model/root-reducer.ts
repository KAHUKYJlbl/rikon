import { combineReducers } from '@reduxjs/toolkit';

import { postSlice } from '../../../../entities/post';

import { NameSpace } from '../lib/name-space';

export const rootReducer = combineReducers({
  [NameSpace.postSlice]: postSlice.reducer,
});

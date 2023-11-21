import { createSlice } from '@reduxjs/toolkit';

import { NameSpace } from '../../../app/provider/store';

import { PostType } from '../lib/types';

type InitialState = {
  posts: PostType[],
}

const initialState: InitialState = {
  posts: [],
}

export const postSlice = createSlice({
  name: NameSpace.postSlice,
  initialState,
  reducers: {

  }
});

import { createSlice } from '@reduxjs/toolkit';

import { NameSpace } from '../../../app/provider/store';

import { PostType } from '../lib/types';
import { getPosts } from './api-actions/get-posts';
import { FetchStatus } from '../../../shared/api/fetch-status';

type InitialState = {
  posts: PostType[],
  postsLoadingStatus: FetchStatus,
}

const initialState: InitialState = {
  posts: [],
  postsLoadingStatus: FetchStatus.Idle,
}

export const postSlice = createSlice({
  name: NameSpace.postSlice,
  initialState,
  reducers: {

  },
  extraReducers(builder) {
    builder
      .addCase(getPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.postsLoadingStatus = FetchStatus.Success;
      })
      .addCase(getPosts.pending, (state) => {
        state.postsLoadingStatus = FetchStatus.Pending;
      })
      .addCase(getPosts.rejected, (state) => {
        state.postsLoadingStatus = FetchStatus.Failed;
      });
  }
});

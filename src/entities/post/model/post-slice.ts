import { createSlice } from '@reduxjs/toolkit';

import { NameSpace } from '../../../app/provider/store';

import { PostType } from '../lib/types';
import { getPosts } from './api-actions/get-posts';
import { FetchStatus } from '../../../shared/api/fetch-status';
import { postPost } from './api-actions/post-post';
import { deletePost } from './api-actions/delete-post';

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
      })
      .addCase(postPost.fulfilled, (state, action) => {
        state.posts = [...state.posts, action.payload];
        state.postsLoadingStatus = FetchStatus.Success;
      })
      .addCase(postPost.pending, (state) => {
        state.postsLoadingStatus = FetchStatus.Pending;
      })
      .addCase(postPost.rejected, (state) => {
        state.postsLoadingStatus = FetchStatus.Failed;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.posts = state.posts.filter((post) => post.id !== action.payload.id);
        state.postsLoadingStatus = FetchStatus.Success;
      })
      .addCase(deletePost.pending, (state) => {
        state.postsLoadingStatus = FetchStatus.Pending;
      })
      .addCase(deletePost.rejected, (state) => {
        state.postsLoadingStatus = FetchStatus.Failed;
      });
  }
});

import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { AppDispatch, State } from '../../../../app/provider/store';
import { APIRoute } from '../../../../shared/api/routes';

import { NewPostType, PostType } from '../../lib/types';

export const postPost = createAsyncThunk<PostType, NewPostType, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'Posts/postPost',
  async (newPost, {extra: axios}) => {
    try {
      const { data } = await axios.post<PostType>(APIRoute.Posts, newPost);

      return data;
    } catch (err) {
      throw Error('Unable to post Post');
    }
  },
);

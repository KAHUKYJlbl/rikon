import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { AppDispatch, State } from '../../../../app/provider/store';
import { APIRoute } from '../../../../shared/api/routes';

import { PostType } from '../../lib/types';

export const getPosts = createAsyncThunk<PostType[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'Post/getPosts',
  async (_arg, {extra: axios}) => {
    try {
      const { data } = await axios.get<PostType[]>(APIRoute.Posts);

      return data;
    } catch (err) {
      throw Error('Unable to get Posts');
    }
  },
);

import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { AppDispatch, State } from '../../../../app/provider/store';
import { APIRoute } from '../../../../shared/api/routes';

import { PostType } from '../../lib/types';
import { generatePath } from 'react-router-dom';

export const deletePost = createAsyncThunk<PostType, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'Posts/deletePost',
  async (id, {extra: axios}) => {
    try {
      const { data } = await axios.delete<PostType>(generatePath(APIRoute.Delete, {id}));

      return data;
    } catch (err) {
      throw Error('Unable to delete Post');
    }
  },
);

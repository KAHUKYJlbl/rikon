import { createSelector } from '@reduxjs/toolkit';
import { NameSpace, State } from '../../../app/provider/store';
import { FetchStatus } from '../../../shared/api/fetch-status';
import { PostType } from '../lib/types';

export const getPostList = (state: State): PostType[] => state[NameSpace.postSlice].posts;

export const getPostLoadingStatus = createSelector(
  (state: State): FetchStatus => state[NameSpace.postSlice].postsLoadingStatus,
  (status) => ({
    Loading: [FetchStatus.Idle, FetchStatus.Pending].includes(status),
    Success: status === FetchStatus.Success,
    Failed: status === FetchStatus.Failed,
  })
);

import { useEffect } from 'react';

import { getPostList, getPostLoadingStatus } from '../../../entities/post/model/post-selectors';
import { getPosts } from '../../../entities/post/model/api-actions/get-posts';
import { Post } from '../../../entities/post';
import { useAppDispatch } from '../../../shared/lib/hooks/use-app-dispatch';
import { useAppSelector } from '../../../shared/lib/hooks/use-app-selector';

import classes from './post-list.module.sass';

const COLUMN_COUNT = 3;
// TODO связать с шириной компонента

export const PostList = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const postList = useAppSelector(getPostList);
  const postLoadingStatus = useAppSelector(getPostLoadingStatus);

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  if (postLoadingStatus.Loading && !postList.length) {
    return <div>Загрузка...</div>
  }

  return (
    <div className={classes.wrapper}>
        {
          Array(COLUMN_COUNT).fill('').map((column, columnIndex) => (
            <div className={classes.column} key={`${column}-${columnIndex}`}>
              {
                postList
                  .filter((_post, postIndex) => (postIndex - columnIndex) % COLUMN_COUNT)
                  .map((post) => (
                    <Post post={post} key={post.title} />
                  ))
              }
            </div>
          ))
        }
    </div>
  )
}

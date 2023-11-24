import { useEffect } from 'react';

import { getPostList, getPostLoadingStatus } from '../../../entities/post/model/post-selectors';
import { getPosts } from '../../../entities/post/model/api-actions/get-posts';
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
          Array(COLUMN_COUNT).fill('').map((_column, columnIndex) => (
            <div className={classes.column}>
              {
                postList
                  .filter((_post, postIndex) => (postIndex - columnIndex) % COLUMN_COUNT)
                  .map((post, index) => (
                    <div className={classes.element}>
                      <h3>{post.title}</h3>

                      <p>{post.body}</p>
                    </div>
                  ))
              }
            </div>
          ))
        }
    </div>
  )
}

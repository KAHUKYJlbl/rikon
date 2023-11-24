import { useEffect } from 'react';

import { getPostList, getPostLoadingStatus } from '../../../entities/post/model/post-selectors';
import { Post, getPosts } from '../../../entities/post';
import { useAppDispatch } from '../../../shared/lib/hooks/use-app-dispatch';
import { useAppSelector } from '../../../shared/lib/hooks/use-app-selector';

import classes from './post-list.module.sass';
import { getColumnCount } from '../lib/get-column-count';

type PostListProps = {
  width: number;
}

export const PostList = ({width}: PostListProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const postList = useAppSelector(getPostList);
  const postLoadingStatus = useAppSelector(getPostLoadingStatus);

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const columnCount = getColumnCount(width);

  if (postLoadingStatus.Loading && !postList.length) {
    return <div>Загрузка...</div>
  }

  return (
    <div className={classes.wrapper}>
        {
          Array(columnCount).fill('').map((column, columnIndex) => (
            <div className={classes.column} key={`${column}-${columnIndex}`}>
              {
                postList
                  .filter((_post, postIndex) => !((postIndex - columnIndex) % columnCount))
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

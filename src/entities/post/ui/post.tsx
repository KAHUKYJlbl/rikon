import dayjs from 'dayjs';
import 'dayjs/locale/ru'

import { PostType } from '../lib/types';
import classes from './post.module.sass';
import { useAppDispatch } from '../../../shared/lib/hooks/use-app-dispatch';
import { deletePost } from '../model/api-actions/delete-post';

type PostProps = {
  post: PostType;
};

export const Post = ({post}: PostProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const handleDeleteClick = () => {
    dispatch(deletePost(post.id));
  };

  return (
    <div className={classes.element}>
      <h3>{post.title}</h3>

      <p className={classes.date}>{dayjs(post.datetime).locale('ru').format('D MMM YYYYг., HH:mm:ss')}</p>

      <p dangerouslySetInnerHTML={{__html: post.body}} />

      <div>
        <button onClick={handleDeleteClick}>Delete</button>
      </div>
    </div>
  )
};

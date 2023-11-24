import dayjs from 'dayjs';
import 'dayjs/locale/ru'

import { PostType } from '../lib/types';
import classes from './post.module.sass';

type PostProps = {
  post: PostType;
};

export const Post = ({post}: PostProps): JSX.Element => {
  return (
    <div className={classes.element}>
      <h3>{post.title}</h3>

      <p>{dayjs(post.datetime).locale('ru').format('DD MMM YYYYг., HH:mm:ss')}</p>

      <p dangerouslySetInnerHTML={{__html: post.body}} />
    </div>
  )
};

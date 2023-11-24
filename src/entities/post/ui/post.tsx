import { PostType } from '../lib/types';
import classes from './post.module.sass';

type PostProps = {
  post: PostType;
};

export const Post = ({post}: PostProps): JSX.Element => {
  return (
    <div className={classes.element}>
      <h3>{post.title}</h3>

      <p>{post.body}</p>
    </div>
  )
};

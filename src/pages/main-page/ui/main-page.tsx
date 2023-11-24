import { NewPost } from '../../../features/new-post';
import { PostList } from '../../../widgets/post-list';

import classes from './main-page.module.sass';

type AppProps = {
  height: number,
  width: number,
}

export const MainPage = ({height = 562, width = 500}: AppProps): JSX.Element => {
  return (
    <div className={classes.app} style={{height: `${height}px`, width: `${width}px`}}>
      <NewPost />

      <PostList width={width} />
    </div>
  )
}


import { NewPost } from '../../../features/new-post'
import { PostList } from '../../../widgets/post-list'

export const MainPage = (): JSX.Element => {
  return (
    <>
    <NewPost />

    <PostList />
    </>
  )
}


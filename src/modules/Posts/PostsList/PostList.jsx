import { useEffect, useState } from 'react';
import { getPosts } from '../post-api';
import PostListItem from './PosyListItem';

function PostsList() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function getPostsData() {
      const postsInfo = await getPosts();
      setPosts(postsInfo);
      setLoading(false);
    }

    getPostsData();
  }, []);

  return (
    <>
      <h1>Posts List</h1>
        {
          isLoading
            ? 'Loading...'
            : <ul>
              {
                posts.map((post) => <PostListItem key={post.id} post={post} />)
              }
            </ul>
        }
    </>
  )
}

export default PostsList;
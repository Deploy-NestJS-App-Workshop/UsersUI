import { useEffect, useState } from 'react';
import { getPost } from '../post-api';
import { useParams } from 'react-router-dom';

function PostsDetail() {
  let { id } = useParams();

  const [post, setPost] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function getPostsData() {
      const postsInfo = await getPost(id);
      setPost(postsInfo);
      setLoading(false);
    }

    getPostsData();
  }, []);

  return (
    <>
      {
        isLoading
          ? 'Loading...'
          : (
            <>
              <h1>Post detail</h1>
              <div>{post.title}</div>
              <div>{post.body}</div>
            </>
          )
      }
    </>
  )
}

export default PostsDetail;
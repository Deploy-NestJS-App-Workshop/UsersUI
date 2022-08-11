import { Link } from 'react-router-dom';

function PostListItem({post}) {
  return (
    <li>
      <Link to={`${post.id}`}>{post.title}</Link>
    </li>
  )
}

export default PostListItem;
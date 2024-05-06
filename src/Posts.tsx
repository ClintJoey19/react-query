interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

const Posts = ({ posts }: { posts: Post[] }) => {
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <p>id: {post.id}</p>
            <p>userId: {post.userId}</p>
            <p>title: {post.title}</p>
            <p>body: {post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;

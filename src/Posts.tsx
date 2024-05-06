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
            <p>TITLE: {post.title}</p>
            <p>BODY: {post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;

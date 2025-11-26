export function PostsIndex({ postsProp, onShow }) {
  return (
    <div id="posts-index">
      <h1>All {postsProp.length} Posts</h1>
      {postsProp.map((post) => (
        <div key={post.id} className="posts">
          <h2>{post.title}</h2>
          <img src={post.image} />
          <p>Body: {post.body}</p>
          <button onClick={() => onShow(post)}>More Info</button>
        </div>
      ))}
    </div>
  );
}

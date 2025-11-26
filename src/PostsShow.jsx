export function PostsShow({ post, onUpdate, onDestroy }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const params = new FormData(form);
    onUpdate(post, params);
    form.reset();
  };
  return (
    <div id="posts-show">
      <h1>Post Info:</h1>
      <h2>{post.title}</h2>
      <p>body: {post.body}</p>
      <hr />
      <h2>Edit Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input name="title" defaultValue={post.title} type="text" />
        </div>
        <div>
          body : <input name="body" defaultValue={post.body} type="text" />
        </div>
        <div>
          Image: <input name="image" defaultValue={post.image} type="text" />
        </div>
        <button type="submit">Update Post</button>
      </form>
      <button onClick={() => onDestroy(post)}>Delete Post</button>
    </div>
  );
}

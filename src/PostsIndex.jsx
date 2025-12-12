export function PostsIndex({ posts, onShow }) {
  return (
    <div id="posts-index">
      <h1>All {posts.length} Posts</h1>
      <div className="row row-cols-3 row-cols-md-4 g-4">
        {posts.map((post) => (
          <div key={post.id} className="col">
            <div className="card h-100">
              <img src={post.image} className="card-img-top object-fit-cover" style={{ height: "200px" }} alt="..." />
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">Body: {post.body}</p>
              </div>
              <button className="btn btn-primary" onClick={() => onShow(post)}>
                More Info
              </button>
              <div className="tags">
                {post.tags && post.tags.map((tag) => (
                  <span key={tag.id} className="badge bg-secondary me-1">
                    {tag.name}
                  </span>
                ))
                }

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

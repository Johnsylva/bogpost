export function PostsNew({ onCreate }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const params = new FormData(form);
    onCreate(params);
    form.reset();
  };

  return (
    <div id="posts-new">
      <h1>New posts</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          Title: <input className="form-control" name="title" type="text" />
        </div>
        <div className="mb-3">
          Body: <input className="form-control" name="body" type="text" />
        </div>
        <div className="mb-3">
          Image: <input className="form-control" name="image" type="text" />
        </div>
        <button className="btn btn-primary" type="submit">
          {" "}
          Create post{" "}
        </button>
      </form>
    </div>
  );
}

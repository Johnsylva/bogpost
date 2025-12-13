export function PostsNew({ onCreate, tags }) {
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
        <div className="mb-3">
          Tag:
          <select name="tag_id" className="form-select">
            <option value="">No tag</option>
            {tags &&
              tags.map((tag) => (
                <option key={tag.id} value={tag.id}>
                  {tag.name}
                </option>
              ))}
          </select>
        </div>
        <button className="btn btn-primary" type="submit">
          {" "}
          Create post{" "}
        </button>
      </form>
    </div>
  );
}

import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <div>
      <h1>Welcome to the Blogs!</h1>
      <p>Browse our collection of exciting blogs.</p>
      <Link to="/posts">View All Blogs</Link>
    </div>
  );
}

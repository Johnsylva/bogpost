import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";

export function Header() {
  const email = localStorage.getItem("email");

  return (
    <header>
      <nav className="navbar bg-primary navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            BlogPost
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>{" "}
              <Link className="nav-link active" aria-current="page" to="/posts">
                All Post
              </Link>
              <Link className="nav-link active" aria-current="page" to="/posts/new">
                New Post
              </Link>
            </div>
          </div>
        </div>
        {email ? (
          <>
            <span> | Logged in as {email} | </span>
            <LogoutLink />
          </>
        ) : (
          <>
            <span> | </span>
            <Link to="/signup">Signup</Link>
            <span> | </span>
            <Link to="/login">Login</Link>
          </>
        )}
      </nav>
    </header>
  );
}

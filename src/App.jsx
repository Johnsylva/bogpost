import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function Header() {
  return (
    <header>
      <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a>
    </header>
  );
}

function PostsNew() {
  return (
    <div id="posts-new">
      <h1>New posts</h1>
      <form>
        <div>
          Title: <input type="text" />
        </div>
        <div>
          Body: <input type="text" />
        </div>
        <div>
          Image: <input type="text" />
        </div>
        <button type="submit"> Submit </button>
      </form>
    </div>
  );
}

function PostsIndex(props) {
  return (
    <div id="posts-index">
      <h1>All posts</h1>
      <h1>All {props.postsProp.length} Posts</h1>
      {props.postsProp.map((post) => (
        <div key={post.id} className="posts">
          <h2>{post.title}</h2>
          <img src={post.image} />
          <p>Body: {post.body}</p>
          <button>More Info</button>
        </div>
      ))}
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <p>Copyright 2025</p>
    </footer>
  );
}

function PostsPage() {
  // where all the data comes from
  // prop - how we get data from one component to the next
  let posts = [
    {
      id: 1,
      title: "Omatopia",
      body: "I am an ardent worker, working my way up life ladder!",
      image: "https://miro.medium.com/v2/resize:fit:640/format:webp/0*ONWrUuXikhzG9gJE",
    },
    {
      id: 2,
      title: "Baby born",
      body: "A mother going through the pains of birthing a child",
      image: "https://lanebphotography.com/wp-content/uploads/2019/04/BMHW-WP-16.jpg",
    },
    {
      id: 3,
      title: "Joyful Duo",
      body: "A happy end to the travails of the day",
      image: "https://media.tenor.com/kQ3RvXxjrNYAAAAM/celebration-dance.gif",
    },
    {
      id: 4,
      title: "Alice Dean",
      body: "THe life of Alice in the evening of winter",
      image: "https://www.publishcentral.com.au/wp-content/uploads/2023/05/book-pile-of-must-read-books-scaled1.jpeg",
    },
    {
      id: 5,
      title: "Laws of Motion",
      body: "A body will remain in its state of rest unless acted upon by an external force",
      image:
        "https://images.squarespace-cdn.com/content/v1/5876279bbebafb82a7c81c00/f4e17d6a-81db-4a04-9bda-63c86c517778/IMG_3105.jpg?format=1000w",
    },
  ];
  return (
    <div>
      <PostsNew />
      <PostsIndex postsProp={posts} />
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <PostsPage />
      <Footer />
    </div>
  );
}

export default App;

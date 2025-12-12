import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PostsIndex } from "./PostsIndex";

export function PostsIndexPage() {
  // where all the data comes from
  // prop - how we get data from one component to the next
  // we will be using a 3rd party library called axios to make requests to our backend
  // react state
  // useState - react hook
  // let posts = [];

  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  // const [currentPost, setCurrentPost] = useState({});
  // special state variable - posts
  // function to update the state variable - setPosts

  const handleIndex = () => {
    axios.get("./posts.json").then((response) => {
      // console.log(response.data);
      // posts = response.data;
      setPosts(response.data);
    });
  };

  // const [isPostsShowVisible, setIsPostShowVisible] = useState(false);

  useEffect(handleIndex, []);

  const handleShow = (post) => {
    // console.log("handleShow", post);
    // setIsPostShowVisible(true);
    // setCurrentPost(post);
    navigate(`/posts/${post.id}`);
  };

  return (
    <div>
      <h1>All Posts</h1>
      <PostsIndex posts={posts} onShow={handleShow} />
    </div>
  );
}

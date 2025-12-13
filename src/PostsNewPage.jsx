import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PostsNew } from "./PostsNew";

export function PostsNewPage() {
  const [tags, setTags] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("/tags.json").then((response) => {
      setTags(response.data);
    });
  }, []);

  // const handleCreate = (params) => {
  //   axios.post("/recipes.json", params).then((response) => {
  //     console.log(response.data);
  //     navigate("/recipes");
  //   });
  // };

  const handleCreate = (params) => {
    // console.log("handleCreate");
    axios.post("./posts.json", params).then((response) => {
      console.log(response.data);
      navigate("/posts");
      // let copiedPosts = Array.from(posts);
      // copiedPosts.push(response.data);
      // setPosts(copiedPosts);

      //spread operator
      // setPosts([...posts, response.data]);
    });
  };

  return (
    <div>
      <h1>New Post</h1>
      <PostsNew onCreate={handleCreate} tags={tags} />
    </div>
  );
}

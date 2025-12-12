import axios from "axios";
import { useNavigate } from "react-router-dom";
import { PostsNew } from "./PostsNew";

export function PostsNewPage() {
  const navigate = useNavigate();

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
      <PostsNew onCreate={handleCreate} />
    </div>
  );
}

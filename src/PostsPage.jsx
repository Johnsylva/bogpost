import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Modal } from "./Modal";
import { PostsShow } from "./PostsShow";

export function PostsPage() {
  // where all the data comes from
  // prop - how we get data from one component to the next
  // we will be using a 3rd party library called axios to make requests to our backend
  // react state
  // useState - react hook
  // let posts = [];

  const [posts, setPosts] = useState([]);
  const [currentPost, setCurrentPost] = useState({});
  // special state variable - posts
  // function to update the state variable - setPosts

  const handleIndex = () => {
    axios.get("./posts.json").then((response) => {
      // console.log(response.data);
      // posts = response.data;
      setPosts(response.data);
    });
  };

  const [isPostsShowVisible, setIsPostShowVisible] = useState(false);

  const handleShow = (post) => {
    // console.log("handleShow", post);
    setIsPostShowVisible(true);
    setCurrentPost(post);
  };

  const handleCreate = (params) => {
    // console.log("handleCreate");
    axios.post("./posts.json", params).then((response) => {
      // console.log(response.data);
      // let copiedPosts = Array.from(posts);
      // copiedPosts.push(response.data);
      // setPosts(copiedPosts);

      //spread operator
      setPosts([...posts, response.data]);
    });
  };

  const handleUpdate = (post, params) => {
    // console.log("handleUpdate");
    axios.patch(`./posts/${post.id}.json`, params).then((response) => {
      // console.log(response.data);
      // let UpdatedPosts = [];
      // let index = 0;
      // while (index < posts.length) {
      //   if (posts[index].id === response.data.id){
      //     updatedPosts.push(response.data)
      //   } else {
      //     updatedPosts.push(posts[index])
      //   }
      //   index += 1
      // }
      // setPosts(updatedPosts);
      setPosts(posts.map((p) => (p.id === response.data.id ? response.data : p)));
      setIsPostShowVisible(false);
    });
  };

  const handleDestroy = (post) => {
    // console.log("handleDestroy", post);
    axios.delete(`./posts/${post.id}.json`).then((response) => {
      // console.log(response.data);
      setPosts(posts.filter((p) => p.id !== post.id));
      setIsPostShowVisible(false);
    });
  };

  useEffect(handleIndex, []);

  return (
    <div>
      <PostsNew onCreate={handleCreate} />
      <PostsIndex postsProp={posts} onShow={handleShow} isPostsShowVisible />
      <Modal show={isPostsShowVisible} onClose={() => setIsPostShowVisible(false)}>
        <PostsShow post={currentPost} onUpdate={handleUpdate} onDestroy={handleDestroy} />
      </Modal>
    </div>
  );
}

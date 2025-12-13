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
  const [allTags, setAllTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState("");

  // const [currentPost, setCurrentPost] = useState({});
  // special state variable - posts
  // function to update the state variable - setPosts

  const handleIndex = (filterTag = "") => {
    axios.get(`/posts.json?tag=${filterTag}`).then((response) => {
      // console.log(response.data);
      console.log(filterTag);
      // posts = response.data;
      setPosts(response.data);
    });
  };

  // const [isPostsShowVisible, setIsPostShowVisible] = useState(false);

  const handleIndexTags = () => {
    axios.get("/tags.json").then((response) => {
      setAllTags(response.data)
    })
  }

  useEffect(() => {
    handleIndex();
    handleIndexTags();
  }, [])


  const handleFilterChange = (event) => {
    const tag = event.target.value;
    setSelectedTag(tag);
    handleIndex(tag);
  }



  // useEffect(handleIndex, []);

  const handleShow = (post) => {
    // console.log("handleShow", post);
    // setIsPostShowVisible(true);
    // setCurrentPost(post);
    navigate(`/posts/${post.id}`);
  };

  return (
    <div>
      <div className="mb-3">
        <label htmlFor="tagFilter" className="form-label">Filter by Tag:</label>
        <select 
        id="tagFilter" 
        className="form-select"
        style={{ maxWidth: "200px"}}
        value={selectedTag}
        onChange={handleFilterChange}>
          <option value="">All Posts</option>
          {allTags.map((tag) => (
            <option key={tag.id} value={tag.name}>
              {tag.name}
            </option>
          ))}

        </select>

      </div>
      <h1>All Posts</h1>
      <PostsIndex posts={posts} onShow={handleShow} />
    </div>
  );
}

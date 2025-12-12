import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PostsShow } from "./PostsShow";

export function PostsShowPage() {
  const [post, setPost] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`/posts/${id}.json`).then((response) => {
      setPost(response.data);
    });
  }, [id]);

  const handleUpdate = (params) => {
    axios.patch(`/posts/${id}.json`, params).then((response) => {
      setPost(response.data);
      navigate("/posts");
    });
  };

  const handleDestroy = () => {
    axios.delete(`/posts/${id}.json`).then(() => {
      navigate("/posts");
    });
  };

  return (
    <div>
      <PostsShow post={post} onUpdate={handleUpdate} onDestroy={handleDestroy} />
    </div>
  );
}

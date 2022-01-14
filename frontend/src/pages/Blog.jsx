import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Add from "../components/Add";
import Navbar from "../components/Navbar";
import { fetchposts, login } from "../redux/actions/users";
import "../styles/Blog.css";

function Blog() {
  const dispatch = useDispatch();
  // const { user } = useSelector((state) => state.auth);
  const [details, setDetails] = useState("");
  const [display, setDisplay] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleDisplay = (e) => {
    e.preventDefault();
    setDisplay(!display);
  };
  useEffect(() => {
    setLoading(true);
    setError(null);
    const getPosts = async () => {
      try {
        const { data } = await axios.post("http://localhost:9090/posts/fetch");
        dispatch(fetchposts(data));
        setLoading(false);
        console.log(data);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    getPosts();
  }, [dispatch]);
  const { posts } = useSelector((state) => state.posts);
  const handleChange = (e) => {
    e.preventDefault();
    setDetails(e.target.value);
    console.log(details);
  };
  const submit = async (postid) => {
    console.log(postid);
    try {
      const { data } = await axios.post("http://localhost:9090/comments/add", {
        postid,
      });
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <>
      <Navbar />
      <h2
        style={{
          color: "blue",
          fontFamily: "serif",
          borderBottom: "2px solid gray",
          width: "fit-content",
        }}
      >
        Entertain
      </h2>
      <div className="blog">
        {posts?.map((post) => (
          <div key={post.postId} className="post">
            <h3>{post.postTitle}</h3>
            <p>{post.details}</p>
            <form onSubmit={(e) => submit(e, post.postId)} autocomplete="off">
              <input
                type="text"
                id="details"
                placeholder="commnet"
                required
                onChange={(e) => handleChange(e)}
              />
              <button>comment</button>
            </form>
          </div>
        ))}
        {display ? (
          <>
            <div className="add">
              <Add />
              <h2 onClick={(e) => handleDisplay(e)}>X</h2>
            </div>
          </>
        ) : (
          <button onClick={(e) => handleDisplay(e)}>Create post</button>
        )}
      </div>
    </>
  );
}

export default Blog;

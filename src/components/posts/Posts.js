import React from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import SinglePost from "./single-post/SinglePost";
import data from "../../assets/data/posts.json";
import "./Posts.css";

const Posts = () => {
  const { id } = useParams();
  let location = useLocation();

  const correspondingPosts = data.posts.filter((i) => i.category_id === +id);

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home Page</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {location.state.name} - {correspondingPosts.length}
          </li>
        </ol>
      </nav>
      <div className="posts-header m-4 d-flex align-items-start">
        <img src={`../icons/${location.state.icon}`} alt="" />
        <div className="ml-4">
          <h4>
            {location.state.name} ({correspondingPosts.length})
          </h4>
          <p className="m-0">{location.state.description}</p>
        </div>
      </div>
      <div className="post-holder">
        {correspondingPosts
          .sort(function (a, b) {
            return new Date(b.date) - new Date(a.date);
          })
          .map((post, index) => {
            return <SinglePost post={post} key={index} />;
          })}
      </div>
    </div>
  );
};

export default Posts;

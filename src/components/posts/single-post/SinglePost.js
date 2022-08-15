import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import profileImg from "../../../assets/images/profile.png";

const SinglePost = ({ post, key }) => {
  const cutString = (str) => {
    return `${str.slice(0, 280)}...`;
  };

  return (
    <div className="card user-card my-3" key={key}>
      <div className="card-body text-left">
        <Link to={`/posts/${post.id}`} state={post}>
          <h4 className="post-title">{post.title}</h4>
        </Link>
        <p className="text-secondary">
          {post.description.length <= 280
            ? post.description
            : cutString(post.description)}
          {post.description.length > 280 && (
            <Link to={`/posts/${post.id}`} state={post}>
              <span className="badge badge-theme">Read more</span>
            </Link>
          )}
        </p>
        <div className="user-info d-flex">
          <div className="img-holder">
            <img src={profileImg} alt="" />
          </div>
          <div className="user-info-text ml-4">
            <p className="text-secondary m-0">
              Written by <span className="font-weight-bold">{post.author}</span>
            </p>
            <p className="text-secondary m-0">
              {moment(new Date(post.date)).format("LL")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;

import React from "react";
import { useLocation, Link } from "react-router-dom";
import moment from 'moment';
import './PostDetails.css';

const PostDetails = () => {
  const { state } = useLocation();
  console.log(state);
  return (
    <div className="post-details">
      <Link to="/">Home Page</Link>
      <div className="card user-card my-3">
        <div className="card-body text-left">
          <h3>{state.title}</h3>
          <p>{state.description}</p>
          <div className="user-info">
            <span className="detail name-dtl">{state.author}</span>
            <span className="detail date-dtl">{moment(new Date(state.date)).format("LL")}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;

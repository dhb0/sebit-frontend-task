import React from "react";
import { useParams, Link } from "react-router-dom";
import SinglePost from "../posts/single-post/SinglePost";
import data from "../../assets/data/posts.json";

const SearchResults = () => {
  const { key } = useParams();

  const match = (array, substr) => {
    return array.filter(
      (element) =>
        element.title.toLowerCase().includes(substr.toLowerCase()) ||
        element.description.toLowerCase().includes(substr.toLowerCase())
    );
  };

  return (
    <div className="search-results">
      <Link className="mt-4" to="/">
        Home Page
      </Link>
      <h3 className="my-4">Filtered posts by: "{key}"</h3>
      <div className="post-holder">
        {match(data.posts, key)
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

export default SearchResults;

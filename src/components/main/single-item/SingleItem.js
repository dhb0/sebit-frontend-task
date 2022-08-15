import React from "react";
import { Link } from "react-router-dom";

const SingleItem = ({ info }) => {
  return (
    <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 my-3">
      <div className="card">
        <div className="card-body d-flex">
          <img src={`../icons/${info.icon}`} alt="" />
          <div className="text-holder ml-3">
            <Link
              to={`/${info.id}`}
              state={info}
            >
              <h3 className="title">{info.name}</h3>{" "}
            </Link>
            <p className="description">{info.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleItem;

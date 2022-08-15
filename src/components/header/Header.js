import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import searchIcon from "../../assets/icons/search.svg";
import "./header.css";

const Header = () => {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    if (searchText !== "") {
      navigate(`/search/${searchText}`);
    }
  }, [searchText]);

  useEffect(() => {
    if (searchText === "" && location.pathname.includes("search")) {
      navigate("/");
    }
  }, [location.pathname, searchText]);

  useEffect(()=> {
    if(!location.pathname.includes('search')){
      setSearchText('')
    }
  }, [location.pathname])


  return (
    <div className="header text-center">
      <div className="container-fluid">
        <h3 className="text-light my-4">How can we help you?</h3>
        <div className="input-container d-flex my-4">
          <img className="mr-4" src={searchIcon} alt="" />
          <input
            type="search"
            value={searchText}
            autoFocus
            onChange={(e) => setSearchText(e.target.value)}
            className="search-input"
            placeholder="Search for answers.."
          />
        </div>
      </div>
    </div>
  );
};

export default Header;

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Posts from "./components/posts/Posts";
import PostDetails from "./components/post-details/PostDetails";
import SearchResults from "./components/search-results/SearchResults";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="container my-4">
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/:id" element={<Posts />} />
            <Route path="/posts/:id" element={<PostDetails />} />
            <Route path="/search/:key" element={<SearchResults />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;

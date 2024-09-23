import React, { useState } from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "javascript1", body: "Description" },
    { id: 2, title: "javascript2", body: "Description" },
    { id: 3, title: "javascript3", body: "Description" },
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <PostList posts={posts} title="Посты про JS" />
    </div>
  );
}

export default App;

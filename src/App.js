import React, { useState } from 'react';
import './App.css';

import Navbar from './Navbar'
import Input from './Input';
import Post from './Post';


function App() {
  const [posts, setPosts] = useState([]);
  const [id, setId] = useState(1); // เพิ่มสถานะ id และกำหนดค่าเริ่มต้นเป็น 1

  function addPost(title) {
    const newPost = { id, title };
    setPosts([newPost, ...posts]);
    setId(id + 1); // เพิ่มค่า id โดยเพิ่ม 1 เมื่อสร้างโพสต์ใหม่
  }

  function deletePost(id) {
    const updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(updatedPosts);
  }


  return (
    <div className="App">
      <Navbar />
      <Input addPost={addPost} />
      {posts.map((post) => (
      <Post key={post.id} id={post.id} title={post.title} deletePost={deletePost} />
      ))}
    </div>
  );
}

export default App;




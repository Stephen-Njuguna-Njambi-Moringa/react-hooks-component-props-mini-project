import React from "react";
import blogData from "../data/blog";
import Header from '../components/Header';
import About from '../components/About'

console.log(blogData);
console.log(blogData.image);

function App() {
  return (
    <div className="App">
      {/* You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck! */}
      <Header />
      <About image={blogData.image}/>
    </div>
  );
}

export default App;

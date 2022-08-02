import { useState } from "react";

function getData(page=3) {
  return fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`).then((res) => {
    return res.json();
  });
}

export default function Posts() {

    const [Posts,setPosts] =useState([])

const handleFetch= async()=>{
    try{
        const data =await getData();
        setPosts(data)
    }
    catch(err){
console.log(err)
    }
}

  return (
    <div>
      <h1>POSTS</h1>
      <button onClick={handleFetch}>Fetch Req</button>
      <ul>
        {Posts.map((ele)=><li key={ele.id}>{ele.title}</li>)}
      </ul>
    </div>
  );
}

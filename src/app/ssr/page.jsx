import React from "react";

export const dynamic = "force-dynamic";

const SSRPage = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  // const data = await fetch("https://jsonplaceholder.typicode.com/posts", {
  //   cache: "no-store",
  // });
  const posts = await data.json();
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
};

export default SSRPage;

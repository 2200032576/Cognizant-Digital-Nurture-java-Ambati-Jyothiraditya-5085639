import React from "react";

function BlogDetails() {
  const blogs = [
    { id: 1, title: "Understanding Hooks", date: "2023-01-12" },
    { id: 2, title: "React Router in Depth", date: "2023-03-09" },
    { id: 3, title: "JSX Gotchas", date: "2023-06-22" }
  ];

  return (
    <div>
      <h2>Blog Details</h2>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            {blog.title} - <em>{blog.date}</em>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogDetails;

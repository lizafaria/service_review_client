import React from "react";

const Blog = ({ blog }) => {
  return (
    <div>
      <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
        <div className="mt-3">
          <p className="text-2xl font-bold hover:underline">{blog.name}</p>
          <p className="mt-2">{blog.body}.</p>
          <p className="mt-2">Comments: {blog.comments}.</p>
          <p className="mt-2">Tags: {blog.tags}.</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;

import React from "react";

const AllReviews = ({ review }) => {
  const { title, email, bookDetails, bookID } = review;
  return (
    <div>
      <div className="p-4 space-y-2 text-sm dark:text-gray-400 border">
        <p>Product: {title}</p>
        <p>Review: {bookDetails}</p>
        <p>ID: {bookID}</p>
        <p>Reviewer Email: {email}</p>
      </div>
    </div>
  );
};

export default AllReviews;

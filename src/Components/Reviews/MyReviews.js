import React, { useEffect, useState } from "react";
import AllReviews from "./AllReviews";

const MyReviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`https://bengliyan-server-lizafaria.vercel.app/reviews`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  console.log(reviews);
  return (
    <div>
      <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
        <div>
          <div className=" justify-between p-4">
            {reviews.map((review) => (
              <AllReviews key={review._id} review={review}></AllReviews>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyReviews;

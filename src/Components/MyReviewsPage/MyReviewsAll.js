import React, { useEffect, useState } from "react";
import Reviews from "../Reviews/Reviews";

const MyReviewsAll = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`https://bengliyan-server-lizafaria.vercel.app/reviews`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div>
      <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
        <div>
          <div className=" justify-between p-4">
            {reviews.map((review) => (
              <Reviews key={review._id} review={review}></Reviews>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyReviewsAll;

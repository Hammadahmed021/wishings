import React from "react";
import { Link } from "react-router-dom";

export const BlogCard = ({ id, image, category, title, author, date }) => {
  return (
    <>
      <Link to={`/blog/${id}`}>
        <div
          className="bg-cover bg-center h-[420px] sm:h-[480px] w-auto  rounded-2xl flex flex-col justify-between px-4 py-6 m-4"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`,
          }}
        >

          <div>
            <p className="bg-background text-small py-2 px-6 rounded-lg font-roboto inline font-semibold">
              {category}
            </p>
          </div>
          <div>
            <h4 className="text-[24px] text-background font-roboto pb-6 font-extrabold	tracking-wide	">{title}</h4>
            <div className="flex gap-3  items-center">
              <span className="font-PlusJakartaSans text-background font-semibold	text-small">by {author}</span>
              <span className="bg-primary w-2 h-2 rounded-full align-middle	"></span>
              <span className="font-poppins text-background font-semibold	text-small">{date}</span>
            </div>
          </div>
        </div >
      </Link>
    </>
  );
};


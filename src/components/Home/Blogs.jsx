import React, { useEffect, useState } from "react";
import { BlogCard } from "../Home/BlogCard.jsx";
import { blogPosts } from "../../utils/localDb";
import { Button } from "../common/Button";

const Blogs = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const res = blogPosts.map((item) => item)
      console.log(res, 'res');

    }
    fetchData()
  }, [])
  return (
    <section>
      <div className="container mx-auto pt-5">
        <div className="relative px-8">
          <p className="text-small text-center font-roboto">Our Blog</p>
          <h2 className="text-h2 text-center pt-3 font-roboto lg:px-28 xl:px-52 leading-tight	">
            From Our Blog – Learn, Grow, & Succeed!
          </h2>
        </div>
        <div>
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-3 py-8">
            {blogPosts?.slice(0, 3)?.map((blog) => (
              <BlogCard
                key={blog?.id}
                id={blog?.id}
                image={blog?.image}
                category={blog?.category}
                title={blog?.title}
                author={blog?.author}
                date={blog.date}
              />
            ))}
          </div>
          <div className="text-center mt-2 lg:mt-6">
            <Button link="/blogs" text="Read More" x={10} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
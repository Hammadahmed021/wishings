import React from "react";
import { BlogCard } from "../Home/BlogCard.jsx";
import { blogPosts } from "../../utils/localDb";
import { Button } from "../common/Button";

 const Blogs = () => {
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
            {blogPosts.map((blogPost) => (
              <BlogCard
                key={blogPost.id}
                image={blogPost.backgroundImage}
                category={blogPost.category}
                title={blogPost.title}
                author={blogPost.author}
                date={blogPost.date}
              />
            ))}
          </div>
          <div className="text-center mt-2 lg:mt-6">
            <Button link="#" x={10} text="Read More" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
import React, { useState } from 'react'
import { blogPosts } from '../utils/localDb';
import { BlogCard } from '../components/Home/BlogCard';

const Blogs = () => {
  const [visibleBlogs, setVisibleBlogs] = useState(3);

  const loadMore = () => {
    setVisibleBlogs((prev) => Math.min(prev + 3, blogPosts.length));
  };
  return (
    <>
      <div className="container mx-auto">
        <h2 className="text-h2 text-center pt-3 font-roboto lg:px-28 xl:px-52 leading-tight	">
          Our Blogs
        </h2>
        <div className="py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(0, visibleBlogs).map((blog) => (
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

        </div>
        <div className='text-center mb-6'>
          {visibleBlogs < blogPosts.length && (
            <button
              onClick={loadMore}
              className={`px-10 mt-4 md:mt-8 py-3 text-background text-small font-roboto bg-gradient-to-b from-btn-gradient-start from-45% to-btn-gradient-end  rounded-full shadow-none transition-shadow duration-300 hover:shadow-md hover:shadow-gray-400`}

            >
              Load More
            </button>

          )}
        </div>
      </div>

    </>
  )
}

export default Blogs;
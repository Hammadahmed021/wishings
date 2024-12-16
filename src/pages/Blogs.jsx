import React, { useState } from 'react'
import { blogPosts } from '../utils/localDb';
import { BlogCard } from '../components';

const Blogs = () => {
  const[visibleBlogs, setVisibleBlogs] = useState(3);

  const loadMore = () => {
    setVisibleBlogs((prev) => Math.min(prev + 3, blogPosts.length));
  };
  return (
    <>
      <div className="container mx-auto">
        <h1 className='text-h3'>Blogs</h1>
        <div className="py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(0, visibleBlogs).map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
          {visibleBlogs < blogPosts.length && (
            <button
              onClick={loadMore}
              className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
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
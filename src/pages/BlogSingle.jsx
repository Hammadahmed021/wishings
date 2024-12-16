import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { blogPosts } from '../utils/localDb';

const BlogSingle = () => {
    const {id} = useParams()
    console.log(id,'blogId');

    const blog = blogPosts.find((b) => b.id === parseInt(id));
    console.log(blog,'blog');
    

    if (!blog) return <p className="p-6">Blog not found.</p>;
    return (
        <>

            <div className="p-6 container mx-auto">
                <h1 className="text-2xl font-bold mb-4">{blog.title}</h1>
                <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover mb-4" />
                <p className="text-sm text-gray-500 mb-2">{blog.category} | {blog.date} | By {blog.author}</p>
                <p className="text-gray-700">{blog.content}</p>
                <Link to="/blogs" className="text-blue-500 hover:underline mt-4 inline-block">
                    Back to Blogs
                </Link>
            </div>
        </>
    )
}

export default BlogSingle

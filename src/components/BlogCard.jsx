import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => (
    <div className="bg-white shadow-md rounded-md overflow-hidden hover:shadow-lg">
        <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
        <div className="p-4">
            <p className="text-sm text-gray-500 mb-1">{blog.category} | {blog.date}</p>
            <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
            <p className="text-gray-600 mb-4">{blog.description}</p>
            <p className="text-sm text-gray-700 mb-4">By {blog.author}</p>
            <Link to={`/blog/${blog.id}`} className="text-blue-500 hover:underline">
                Read More
            </Link>
        </div>
    </div>
);
export default BlogCard;
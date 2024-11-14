// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Introducing scriptmate: AI-Powered Script Generation",
      excerpt:
        "Learn how our new AI model is revolutionizing the way developers write code.",
      author: "Jane Doe",
      date: "2023-06-01",
      category: "Product Updates",
    },
    {
      id: 2,
      title: "5 Ways AI is Transforming Software Development",
      excerpt:
        "Explore the impact of AI on modern software development practices and workflows.",
      author: "John Smith",
      date: "2023-05-15",
      category: "Industry Trends",
    },
    {
      id: 3,
      title: "Best Practices for Integrating AI-Generated Code",
      excerpt:
        "Tips and tricks for seamlessly incorporating AI-generated scripts into your projects.",
      author: "Alice Johnson",
      date: "2023-04-22",
      category: "Tips & Tricks",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          scriptmate Blog
        </h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <div className="p-6">
                <p className="text-sm font-medium text-blue-600 mb-1">
                  {post.category}
                </p>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-700 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      className="h-8 w-8 rounded-full mr-2"
                      src={`https://ui-avatars.com/api/?name=${post.author}&background=random`}
                      alt={post.author}
                    />
                    <span className="text-sm text-gray-600">{post.author}</span>
                  </div>
                  <span className="text-sm text-gray-600">{post.date}</span>
                </div>
              </div>
              <div className="bg-gray-50 px-6 py-4">
                <Link
                  to={`/blog/${post.id}`}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Read more →
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            to="/blog"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600  hover:bg-blue-700"
          >
            View all posts
          </Link>
        </div>
      </div>
    </div>
  );
}

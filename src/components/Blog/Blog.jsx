import React from "react";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "Introduction to Core Java",
      date: "Dec 2025",
      img: "/corejava1.webp",
      description:
        "Core Java is the fundamental part of Java used for building basic to advanced applications. It covers OOP concepts, data types, classes, objects, loops, arrays, and exception handling.",
      link: "/blog1",
    },
    {
      id: 2,
      title: "Tailwind CSS",
      date: "Dec 2025",
      img: "/tai2.webp",
      description:
        "Tailwind CSS is a utility-first framework that lets you style directly in HTML using small utility classes, giving full design control without pre-made components.",
      link: "/blog2",
    },
    {
      id: 3,
      title: "JavaScript",
      date: "Dec 2025",
      img: "/javascript3.webp",
      description:
        "JavaScript is a powerful scripting language used to make websites dynamic and interactive. It runs in the browser and is essential for front-end development, animations, APIs, and real-time features.",
      link: "/blog3",
    },
  ];

  return (
    <section id="blog" className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
       {/* Section Heading */}
<div className="text-center mb-20 relative">
  {/* Main Heading */}
  <h2 className="text-4xl md:text-5xl font-extrabold mb-4 relative inline-block 
                 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                 animate-gradient-x">
    <span className="mr-2">Our</span>
    <span className="text-gray-800">Blog</span>
  </h2>

  {/* Animated Underline */}
  <div className="mx-auto mt-2 w-24 h-1 bg-indigo-600 rounded-full animate-pulse"></div>

  {/* Description */}
  <p className="text-gray-500 max-w-2xl mx-auto text-lg mt-4">
    We provide high-standard, clean, and modern website solutions for your business.
  </p>
</div>
        {/* Blog Cards */}
        <div className="grid gap-10 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 cursor-pointer"
            >
              {/* Image with gradient overlay */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <a href={blog.link}>
                  <h3 className="text-xl font-semibold text-gray-800 hover:text-indigo-600 transition-colors duration-300">
                    {blog.title}
                  </h3>
                </a>
                <span className="block text-sm text-gray-400 mt-2">{blog.date}</span>
                <p className="text-gray-600 mt-4 line-clamp-3">{blog.description}</p>
                <a
                  href={blog.link}
                  className="inline-flex items-center mt-4 text-indigo-600 font-medium hover:underline"
                >
                  Read More →
                </a>
              </div>

              {/* Animated hover icon */}
              <div className="absolute top-4 right-4 bg-indigo-600 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                🔥
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
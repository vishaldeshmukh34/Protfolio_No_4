import React, { useState } from "react";

const projects = [
  {
    id: 1,
    img: "/web1.png",
    category: "Web Development",
  },
  {
    id: 2,
    img: "/app2.png",
    category: "App Development",
  },
  {
    id: 3,
    img: "/ui3.png",
    category: "UI/UX, Graphic Design",
  },
  // Add more projects here
];

const Works = () => {
  const [filter, setFilter] = useState("All");

  const categories = ["All", ...new Set(projects.map((p) => p.category))];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="work" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-extrabold mb-4">
          <span className="text-indigo-600">Our</span> Works
        </h1>
        <p className="text-gray-600 mb-12">
          We provide high-quality, clean, and modern websites for your business.
        </p>

        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full font-medium text-sm transition 
                ${
                  filter === cat
                    ? "bg-indigo-600 text-white shadow-lg"
                    : "bg-gray-200 text-gray-700 hover:bg-indigo-100"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="relative overflow-hidden rounded-2xl shadow-xl transform transition duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={project.img}
                alt={project.category}
                className="w-full h-64 object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
                <span className="text-indigo-400 text-sm mb-2 uppercase tracking-wide animate-pulse">
                  Category
                </span>
                <h3 className="text-white text-xl font-bold text-center px-2">
                  {project.category}
                </h3>
              </div>
              {/* Animated bottom info */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/40 text-white text-sm opacity-0 hover:opacity-100 transition duration-300 text-center">
                Click to view details
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("about");

  const navItems = [
    "about",
    "skills",
    "projects",
    "mywork",
    "blog",
    "contact",
  ];

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h2 className="text-2xl font-bold text-indigo-600">
          Vishal.dev
        </h2>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                onClick={() => setActive(item)}
                className={`relative transition duration-300 
                  ${active === item 
                    ? "text-indigo-600 font-bold" 
                    : "text-gray-700 hover:text-indigo-600"}
                `}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}

                {/* Animated Underline */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-indigo-600 transition-all duration-300
                  ${active === item ? "w-full" : "w-0"}
                  `}
                ></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div
          className="md:hidden text-3xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-lg transition-all duration-300 overflow-hidden
        ${menuOpen ? "max-h-96 py-6" : "max-h-0"}
        `}
      >
        <ul className="flex flex-col items-center space-y-6 font-medium">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                onClick={() => {
                  setActive(item);
                  setMenuOpen(false);
                }}
                className={`text-lg transition duration-300
                  ${active === item
                    ? "text-indigo-600 font-bold"
                    : "text-gray-700"}
                `}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
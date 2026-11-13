
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Compass, Menu, X } from "lucide-react";

const navigation = [
  { name: "Home", path: "/" },
  { name: "Explore", path: "/explore" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full">
      <nav className="flex h-[82px] w-full items-center justify-between border-b border-white/60 bg-white/45 px-4 shadow-[0_8px_32px_rgba(15,23,42,0.08)] backdrop-blur-2xl backdrop-saturate-150 sm:px-8 lg:px-14">

        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="group flex shrink-0 items-center gap-2.5"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary shadow-lg shadow-teal-900/20 transition-all duration-300 group-hover:rotate-6 group-hover:scale-105">
            <Compass size={26} className="text-white" />
          </div>

          <span className="text-2xl font-extrabold tracking-tight text-dark">
            Wanderly<span className="text-primary">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-2 md:absolute md:left-1/2 md:flex md:-translate-x-1/2">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `rounded-full px-6 py-3 text-base font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-primary text-white shadow-md shadow-teal-900/15"
                    : "text-dark/65 hover:bg-white/70 hover:text-primary"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          className="rounded-xl border border-white/70 bg-white/55 p-2.5 text-dark shadow-sm backdrop-blur-xl transition-all hover:bg-white/80 md:hidden"
        >
          {isMenuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`w-full overflow-hidden border-b border-white/60 bg-white/55 shadow-[0_8px_32px_rgba(15,23,42,0.08)] backdrop-blur-2xl backdrop-saturate-150 transition-all duration-300 md:hidden ${
          isMenuOpen
            ? "max-h-64 opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <div className="space-y-1 px-4 py-4 sm:px-5">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              end={item.path === "/"}
              onClick={closeMenu}
              className={({ isActive }) =>
                `block rounded-xl px-4 py-3.5 text-base font-semibold transition-all ${
                  isActive
                    ? "bg-primary text-white"
                    : "text-dark/70 hover:bg-white hover:text-primary"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

        </div>
      </div>
    </header>
  );
}

export default Navbar;

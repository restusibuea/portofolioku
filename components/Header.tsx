"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  const isMounted = mounted || typeof window !== "undefined";

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed w-full top-0 left-0 z-50 bg-dark-bg/70 backdrop-blur-[10px] transition-colors duration-300">
      <div className="flex justify-between items-center px-[5%] py-8">
        {/* Logo */}
        <Link href="#" className="text-4xl font-bold transition-transform hover:scale-110">
          design by <span className="gradient-text">restu</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-1.8xl font-medium text-text-light hover:text-accent-orange transition-colors border-b-3 border-transparent hover:border-accent-orange"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center gap-6">
          {/* Desktop Contact Button */}
          <button className="hidden lg:block px-8 py-4 bg-gradient-to-r from-accent-dark-orange to-accent-red text-white rounded-3xl font-semibold transition-transform hover:scale-105">
            Contact Me
          </button>

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-2.5xl text-text-light hover:text-accent-orange transition-transform hover:scale-110"
            aria-label="Toggle theme"
          >
            {isMounted && theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-3.5xl text-accent-orange"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="lg:hidden absolute top-full right-0 w-1/2 bg-black/80 border-l-2 border-b-2 border-accent-orange rounded-bl-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-2xl font-medium text-text-light hover:text-accent-orange py-3 px-12 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

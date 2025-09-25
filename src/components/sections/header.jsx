"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Product", href: "/product" },
  { label: "Security", href: "/security" },
  { label: "Company", href: "/company" },
  { label: "News", href: "/news" },
  { label: "Careers", href: "/careers" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  useEffect(() => {
    // Prevent scrolling when mobile menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
        isScrolled ? "bg-background/90 backdrop-blur-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-10">
        <div className="flex items-center justify-between h-[68px]">
          <Link href="/">
            <span className="text-3xl font-bold text-white font-display cursor-pointer">
              rogo
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-base font-medium text-white hover:opacity-75 transition-opacity"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-6">
            <a
              href="https://tryrogo.com"
              className="text-base font-medium text-white hover:opacity-75 transition-opacity"
            >
              Log in
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center whitespace-nowrap bg-primary text-primary-foreground rounded-full py-3 px-6 h-auto text-base font-medium hover:bg-gray-200 transition-colors"
            >
              Request Demo
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-7 w-7" />
              ) : (
                <Menu className="h-7 w-7" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full h-screen bg-background pt-8">
          <nav className="flex flex-col items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-xl font-medium text-white hover:opacity-75 transition-opacity"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
             <a
              href="https://tryrogo.com"
              className="text-xl font-medium text-white hover:opacity-75 transition-opacity"
              onClick={() => setIsMenuOpen(false)}
            >
              Log in
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center whitespace-nowrap bg-primary text-primary-foreground rounded-full py-3 px-6 h-auto text-xl font-medium hover:bg-gray-200 transition-colors mt-4"
               onClick={() => setIsMenuOpen(false)}
            >
              Request Demo
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
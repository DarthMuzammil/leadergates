"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/">
            <div className="flex items-center space-x-2">
            <img src="/logo.svg"  className="h-20 w-80 flex justify-between items-center object-cover sm:h-20 sm:w-80 sm:mr-4 sm:float-right" />
              <span className="text-xl font-bold text-gray-800 hidden sm:inline">
                LEADERGATES AUTOMATIC DOORS
              </span>
            </div>
          </Link>

          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li>
                <Link href="/" className="text-gray-600 hover:text-[rgb(142,22,22)]">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-600 hover:text-[rgb(142,22,22)]"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-[rgb(142,22,22)]">
                  About
                </Link>
              </li>
              <li>
                <Link href="https://wa.me/971504085867?text=Hello" target="_blank" className="text-gray-600 hover:text-[rgb(142,22,22)]">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <button
            className="md:hidden text-gray-600 hover:text-[rgb(142,22,22)]"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
        </div>

        {isMenuOpen && (
          <nav className="mt-4 md:hidden">
            <ul className="flex flex-col space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-[rgb(142,22,22)] block py-2">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-600 hover:text-[rgb(142,22,22)] block py-2"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-[rgb(142,22,22)] block py-2">
                  About
                </Link>
              </li>
              <li>
                <Link href="https://wa.me/971504085867?text=Hello" target="_blank" className="text-gray-600 hover:text-[rgb(142,22,22)] block py-2">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}


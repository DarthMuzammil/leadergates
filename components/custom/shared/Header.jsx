"use client";

import Link from "next/link";
import {
  DoorOpenIcon as Gate,
  DoorOpen,
  Shield,
  Clock,
  Phone,
} from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <div className="flex items-center space-x-2">
            <Gate className="h-8 w-8 text-blue-600" />
            <span href="/" className="text-2xl font-bold text-gray-800">
              Leadergates Automatic Doors
            </span>
          </div>
        </Link>

        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="text-gray-600 hover:text-blue-600">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="text-gray-600 hover:text-blue-600"
              >
                Products
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-600 hover:text-blue-600">
                About
              </Link>
            </li>
            <li>
              <Link href="https://wa.me/971504085867?text=Hello" target="_blank" className="text-gray-600 hover:text-blue-600">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

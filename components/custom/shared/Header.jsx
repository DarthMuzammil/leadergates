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
    <header className=" bg-blue-600 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <div className="flex items-center space-x-2">
            {/* <Gate className="h-8 w-8 text-white" /> */}
            <img src="/logo.png "  className="h-20 w-20 object-cover" />
            <span href="/" className="text-2xl font-bold text-white">
              Leadergates Automatic Doors
            </span>
          </div>
        </Link>

        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="#" className="text-white hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="text-white hover:text-white"
              >
                Products
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-white hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="#" className="text-white hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

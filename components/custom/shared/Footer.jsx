"use client";
import { DoorOpenIcon as Gate, Phone, Mail, Globe } from "lucide-react"


export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Leader Gate</h2>
            <p className="text-sm">AUTOMATIC DOORS ليدر جيت أوتوماتيك أبواب</p>
            <p className="text-sm mt-2">
              DOOR AUTOMATION SYSTEMS (SALES & SERVICES)
            </p>
            <p className="text-sm">انظمة الاتوماتيكي للابواب وخدماتها</p>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <div className="flex items-center mb-2">
              <Phone className="h-5 w-5 mr-2" />
              <a href="tel:+971504085867" className="hover:text-blue-400">
                +971-504085867
              </a>
            </div>
            <div className="flex items-center mb-2">
              <Phone className="h-5 w-5 mr-2" />
              <a href="tel:+971505789030" className="hover:text-blue-400">
                505789030
              </a>
            </div>
            <div className="flex items-center mb-2">
              <Mail className="h-5 w-5 mr-2" />
              <a
                href="mailto:manager@leadergates.com"
                className="hover:text-blue-400"
              >
                manager@leadergates.com
              </a>
            </div>
            <div className="flex items-center">
              <Globe className="h-5 w-5 mr-2" />
              <a
                href="https://www.leadergates.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                www.leadergates.com
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          © {new Date().getFullYear()} Leader Gate. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

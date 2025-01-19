import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Define client categories and their colors with softer tones
const categoryStyles = {
  "Manufacturing": {
    background: "bg-gradient-to-br from-red-50 to-red-100",
    border: "border-red-200",
    text: "text-red-900",
    badge: "bg-red-100 text-red-900 border-red-200"
  },
  "Hospitality": {
    background: "bg-gradient-to-br from-blue-50 to-blue-100",
    border: "border-blue-200",
    text: "text-blue-900",
    badge: "bg-blue-100 text-blue-900 border-blue-200"
  },
  "Real Estate": {
    background: "bg-gradient-to-br from-rose-50 to-rose-100",
    border: "border-rose-200",
    text: "text-rose-900",
    badge: "bg-rose-100 text-rose-900 border-rose-200"
  },
  "Engineering": {
    background: "bg-gradient-to-br from-indigo-50 to-indigo-100",
    border: "border-indigo-200",
    text: "text-indigo-900",
    badge: "bg-indigo-100 text-indigo-900 border-indigo-200"
  },
  "Telecommunications": {
    background: "bg-gradient-to-br from-amber-50 to-amber-100",
    border: "border-amber-200",
    text: "text-amber-900",
    badge: "bg-amber-100 text-amber-900 border-amber-200"
  },
  "Conglomerate": {
    background: "bg-gradient-to-br from-purple-50 to-purple-100",
    border: "border-purple-200",
    text: "text-purple-900",
    badge: "bg-purple-100 text-purple-900 border-purple-200"
  },
  "Facility Management": {
    background: "bg-gradient-to-br from-pink-50 to-pink-100",
    border: "border-pink-200",
    text: "text-pink-900",
    badge: "bg-pink-100 text-pink-900 border-pink-200"
  },
  "Residential": {
    background: "bg-gradient-to-br from-sky-50 to-sky-100",
    border: "border-sky-200",
    text: "text-sky-900",
    badge: "bg-sky-100 text-sky-900 border-sky-200"
  }
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-red-900">About Leader Gate</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-red-900">Welcome to Leader Gate Automatic Doors</h2>
        <p className="text-gray-700 mb-4">
          Leader Gate is a leading provider of Automatic Gate, Doors, Barriers & Security Control Solutions in the UAE. We specialize in the design, installation, and maintenance of high-quality motorized steel and aluminium gates, automatic doors, barriers, roll up shutters, and parking shutters.
        </p>
        <p className="text-gray-700 mb-4">
          With years of experience and a commitment to innovation, we've established ourselves as a trusted name in the industry, serving both residential and commercial clients across the region.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-red-900">Our Expertise</h2>
        <p className="text-gray-700 mb-4">
          At Leader Gate, we pride ourselves on our comprehensive range of services and products. Our solutions cater to the safety and security needs of various spaces, including:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Business offices and commercial spaces</li>
          <li>Retail shops and showrooms</li>
          <li>Industrial workshops and warehouses</li>
          <li>Parking areas and storage facilities</li>
          <li>Residential properties and gated communities</li>
        </ul>
        <p className="text-gray-700 mb-4">
          We not only manufacture and install but also repair and maintain all types of automatic doors and gates. Our in-house design and manufacturing capabilities extend to creating custom controllers, ensuring seamless automation and easy maintenance for all our products.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-red-900">Our Commitment to Quality</h2>
        <p className="text-gray-700 mb-4">
          Quality is at the heart of everything we do at Leader Gate. We are committed to:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Using only high-grade raw materials from reputable suppliers</li>
          <li>Adhering to industry standards in all our manufacturing processes</li>
          <li>Continuous innovation to improve our products and services</li>
          <li>Providing exceptional customer service and support</li>
          <li>Ensuring the longevity and reliability of our installations</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-red-900">Our Mission and Vision</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Card className="border border-red-200 shadow-sm hover:shadow-md transition-shadow duration-300">
            <CardHeader className="bg-gradient-to-r from-red-50 to-red-100">
              <CardTitle className="text-red-900">Mission</CardTitle>
            </CardHeader>
            <CardContent className="bg-white">
              <p className="text-gray-700">To offer our customers dedicated high-quality service with competitive prices and great innovation, ensuring their safety and security needs are met with excellence.</p>
            </CardContent>
          </Card>
          <Card className="border border-blue-200 shadow-sm hover:shadow-md transition-shadow duration-300">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100">
              <CardTitle className="text-blue-900">Vision</CardTitle>
            </CardHeader>
            <CardContent className="bg-white">
              <p className="text-gray-700">To be the leading company in Automation Works across the UAE, setting industry standards and pioneering innovative solutions in automatic doors and security systems.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-red-900">Our Prestigious Clients</h2>
        <p className="text-gray-700 mb-6">
          We're proud to have served a diverse range of clients, from luxury hotels to major corporations and residential communities. Our client list is a testament to the trust and quality associated with the Leader Gate name:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: "FAB Properties", type: "Real Estate" },
            { name: "AG Engineering", type: "Engineering" },
            { name: "EFG-Emirates Float Glass", type: "Manufacturing" },
            { name: "Etisalat", type: "Telecommunications" },
            { name: "Rixos Premium Hotels", type: "Hospitality" },
            { name: "Exeed Group", type: "Conglomerate" },
            { name: "ZMS Properties", type: "Real Estate" },
            { name: "Adeeb Group", type: "Facility Management" },
            { name: "Reliance FM", type: "Facility Management" },
            { name: "Saadiyat Beach Villas", type: "Residential" },
            { name: "Saadiyat Beach Residence", type: "Residential" },
            { name: "Jawaher Villas- Saadiyat", type: "Residential" },
            { name: "Marina Village Community", type: "Residential" },
            { name: "Al Raha Gardens", type: "Residential" }
          ].map((client, index) => (
            <Card 
              key={index} 
              className={`
                ${categoryStyles[client.type].background}
                ${categoryStyles[client.type].border}
                border
                shadow-sm
                hover:shadow-md
                transition-all
                duration-300
                transform
                hover:scale-102
                hover:-translate-y-1
              `}
            >
              <CardHeader>
                <CardTitle className={`text-lg ${categoryStyles[client.type].text}`}>
                  {client.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Badge 
                  variant="outline" 
                  className={`
                    ${categoryStyles[client.type].badge}
                    font-medium
                  `}
                >
                  {client.type}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}


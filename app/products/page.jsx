"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { DoorOpenIcon as Gate, Phone, Mail, Globe } from "lucide-react"
import ProductModal from "@/components/ProductModal"

const products = [
  {
    slug: "sliding-doors",
    title: "Sliding Doors",
    description:
      "Experience elegance and convenience with our premium sliding doors—engineered for smooth operation, space efficiency, and a modern aesthetic that complements any setting.",
    imageSrc: "/homepage/automatic sliding doors.jpg",
    features: [
      "Smooth and silent operation with precision-engineered rollers",
      "Energy-efficient design with weatherstripping to prevent drafts",
      "Safety sensors to prevent accidental closures",
      "Available in various materials including glass, wood, and metal",
      "Customizable sizes to fit any opening",
      "Optional automatic operation with motion sensors or remote control",
    ],
    applications:
      "Ideal for residential homes, office buildings, shopping centers, and hotels. Perfect for spaces where traditional swing doors may be impractical, offering a sleek and space-saving solution.",
  },
  {
    slug: "rolling-shutters",
    title: "Rolling Shutters",
    description:
      "Enhance security and insulation with our versatile rolling shutters—designed for durability, ease of use, and adaptability to various architectural styles.",
    imageSrc: "/homepage/rollingShutters.jpg",
    features: [
      "High-quality aluminum or steel construction for maximum durability",
      "Insulated slats for improved energy efficiency",
      "Manual or motorized operation options",
      "Wind-resistant design for added protection",
      "Various color options to match any façade",
      "Compact housing to minimize visual impact when retracted",
    ],
    applications:
      "Suitable for residential windows, storefronts, warehouses, and industrial facilities. Provides excellent security, weather protection, and noise reduction while maintaining a clean, professional appearance.",
  },
  {
    slug: "shutters",
    title: "Shutters",
    description:
      "Combine security, style, and functionality with our premium shutters—crafted to protect your spaces while adding a sleek, modern touch to your property. Perfect for homes, businesses, and industrial needs.",
    imageSrc: "/homepage/highspeed.jpg",
    features: [
      "Durable construction using high-grade materials",
      "Customizable designs to fit various architectural styles",
      "Excellent insulation properties for energy efficiency",
      "Easy operation with manual or motorized options",
      "Wide range of colors and finishes available",
      "Low maintenance requirements for long-term reliability",
    ],
    applications:
      "Versatile solution for residential homes, retail stores, offices, and industrial buildings. Offers enhanced security, privacy, and climate control while adding aesthetic value to the property.",
  },
  {
    slug: "garage-doors",
    title: "Garage Doors",
    description:
      "Enhance your space with our premium garage doors—designed for durability, smooth operation, and modern aesthetics that complement any property.",
    imageSrc: "/homepage/garagedoors.jpg",
    features: [
      "Robust construction with high-quality materials for longevity",
      "Insulated options for improved energy efficiency",
      "Quiet operation with precision-engineered components",
      "Safety features including pinch-resistant design and obstacle detection",
      "Wide range of styles, colors, and window options",
      "Smart home integration capabilities for remote operation",
    ],
    applications:
      "Perfect for residential homes, multi-unit dwellings, commercial warehouses, and automotive businesses. Provides secure and convenient access while enhancing the overall appearance of the property.",
  },
  {
    slug: "gates-and-accessories",
    title: "Gates & Accessories",
    description:
      "Discover a perfect blend of security and style with our premium gates and accessories. From robust gate motors to sleek barriers, we offer innovative solutions tailored to enhance convenience, safety, and elegance for your property.",
    imageSrc: "/homepage/gatesAndacceseries.jpg",
    features: [
      "High-performance gate motors for smooth and reliable operation",
      "Durable construction materials suitable for various environmental conditions",
      "Advanced access control systems including keypads, card readers, and smartphone integration",
      "Safety sensors and obstacle detection technology",
      "Customizable gate designs to match property aesthetics",
      "Comprehensive range of accessories including intercoms, photocells, and loop detectors",
    ],
    applications:
      "Suitable for residential driveways, gated communities, commercial complexes, industrial sites, and parking facilities. Provides enhanced security, controlled access, and adds value to the property with sophisticated automation and design.",
  },
]

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (product) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
        <p className="text-center mb-8 max-w-2xl mx-auto">
          Leader Gate specializes in automatic doors and gates. We offer a wide range of products including sliding
          doors, rolling shutters, garage doors, gates, and more for residential, commercial, and industrial
          applications.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} onClick={() => openModal(product)} />
          ))}
        </div>
      </main>
      <ProductModal product={selectedProduct} isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </div>
  )
}

function ProductCard({ product, onClick }) {
  return (
    <Card
      className="flex flex-col h-full cursor-pointer transition-transform duration-300 hover:scale-105"
      onClick={onClick}
    >
      <CardHeader>
        <CardTitle>{product.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <Image
          src={product.imageSrc || "/placeholder.svg"}
          alt={product.title}
          width={400}
          height={300}
          className="w-full h-48 object-cover mb-4 rounded-md"
        />
        <p className="text-gray-600">{product.description}</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-[rgb(142,22,22)]">Learn More</Button>
      </CardFooter>
    </Card>
  )
}


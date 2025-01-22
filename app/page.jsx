'use client'

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { DoorOpenIcon as Gate, DoorOpen, Shield, Clock, Phone } from 'lucide-react';
import Link from "next/link";
import { useState } from "react";
import ProductModal from "@/components/ProductModal";

const products = [
  {
    slug: "rolling-shutter",
    title: "Rolling Shutter",
    description: "Secure your spaces effortlessly with sleek, sturdy, and customizable rolling shutters designed for homes and businesses alike.",
    imageSrc: "/homepage/RollingShutter.jpg",
    features: [
      "High-quality galvanized steel or aluminum construction",
      "Insulated options for improved energy efficiency",
      "Motorized operation with manual override",
      "Various slat profiles and colors available",
      "Wind-resistant design for durability"
    ],
    applications: "Ideal for storefronts, warehouses, garages, and industrial facilities. Provides excellent security and weather protection while offering a clean, professional appearance."
  },
  {
    slug: "sliding-gate-motor",
    title: "Sliding Gate Motor",
    description: "Experience the power of automation with our sliding gate motors, blending speed, strength, and reliability for effortless access control.",
    imageSrc: "/homepage/motor.jpg",
    features: [
      "Powerful DC motor for smooth and quiet operation",
      "Built-in obstacle detection for safety",
      "Adjustable speed and force settings",
      "Remote control and smartphone app compatibility",
      "Battery backup option for power outages"
    ],
    applications: "Perfect for residential driveways, commercial properties, and industrial complexes. Enhances security and convenience by allowing gate operation from the comfort of your vehicle."
  },
  {
    slug: "over-head-garage-door",
    title: "Over Head Garage Door",
    description: "Elevate your garage with our durable and stylish overhead doors, built for smooth operation and ultimate convenience.",
    imageSrc: "/homepage/garagedoors.jpg",
    features: [
      "Constructed with high-quality steel or aluminum for durability",
      "Insulated panels for enhanced thermal efficiency",
      "Smooth and quiet operation with precision-engineered tracks",
      "Available in a variety of styles and finishes to suit any aesthetic",
      "Equipped with advanced security locking mechanisms",
      "Manual and motorized options with remote control accessibility"
    ],
    applications: "Ideal for residential garages, commercial facilities, and industrial warehouses. Provides reliable security, insulation, and ease of access while complementing the overall property aesthetics."
  },
  {
    slug: "gate-barrier",
    title: "Gate Barrier",
    description: "Control traffic with precision using our robust gate barriers—perfect for parking lots and secure entry points.",
    imageSrc: "/homepage/gatebarrier.jpg",
    features: [
      "Durable construction with weather-resistant materials",
      "Fast and smooth operation for efficient traffic management",
      "Integration with access control systems like RFID and biometric scanners",
      "Customizable boom lengths to suit various entry sizes",
      "Manual override option for emergency situations",
      "LED indicators for enhanced visibility and safety"
    ],
    applications: "Ideal for parking lots, toll booths, residential complexes, and commercial properties. Ensures seamless access control and security management with minimal manual intervention."
},
{
  slug: "sliding-gate",
  title: "Sliding Gate",
  description: "Add elegance and functionality to your property with sliding gates, offering smooth movement and modern aesthetics.",
  imageSrc: "/homepage/slidingGate.jpg",
  features: [
    "Heavy-duty steel or aluminum construction for durability",
    "Space-saving design ideal for properties with limited driveway space",
    "Smooth and silent operation with precision track system",
    "Available in manual and automated options with remote control",
    "Weather-resistant coating for long-lasting performance",
    "Customizable designs, colors, and finishes to suit any architectural style"
  ],
  applications: "Perfect for residential driveways, industrial complexes, and commercial properties. Provides enhanced security while maximizing space efficiency and aesthetic appeal."
},
{
  slug: "fire-rated-shutters",
  title: "Fire Rated Shutters",
  description: "Shield your property with our fire-rated shutters, engineered for top-notch safety and durability, offering seamless fire resistance without compromising style.",
  imageSrc: "/homepage/fireratedShutter.jpg",
  features: [
    "Tested and certified for fire resistance up to industry standards",
    "Constructed from high-quality galvanized steel for maximum strength",
    "Automatic closing mechanism activated during fire emergencies",
    "Smoke and heat insulation to prevent fire spread",
    "Customizable sizes and finishes to match building aesthetics",
    "Manual and motorized operation with fail-safe controls"
  ],
  applications: "Ideal for warehouses, commercial kitchens, shopping malls, and industrial facilities. Provides superior fire protection while ensuring compliance with safety regulations."
},
{
  slug: "fast-door-single-gate",
  title: "Fast Door / Single Gate",
  description: "Speed meets style in our fast doors and single gates, delivering quick access with a sleek design tailored for busy environments.",
  imageSrc: "/homepage/fastdoororsinglegate.jpg",
  features: [
    "High-speed operation for efficient traffic flow",
    "Durable construction with corrosion-resistant materials",
    "Smooth and quiet performance with advanced motor technology",
    "Customizable sizes, colors, and finishes to suit any space",
    "Safety sensors and emergency stop features for enhanced protection",
    "Energy-efficient design with excellent insulation properties"
  ],
  applications: "Perfect for warehouses, logistics hubs, hospitals, and commercial buildings. Ensures rapid access while maintaining security and energy efficiency."
},
{
  slug: "automatic-perforate-rolling-shutter",
  title: "Automatic Perforate Rolling Shutter",
  description: "Combine security and visibility with automatic perforated rolling shutters—perfect for showcasing while keeping things safe.",
  imageSrc: "/homepage/automaticperforaterollingshutter.jpg",
  features: [
    "High-strength perforated steel or aluminum construction",
    "Motorized operation with remote and manual override options",
    "Enhanced ventilation and visibility without compromising security",
    "Powder-coated finish for corrosion resistance and durability",
    "Smooth and quiet rolling mechanism for effortless use",
    "Customizable perforation patterns to suit branding needs"
  ],
  applications: "Ideal for retail stores, showrooms, malls, and commercial buildings. Provides an excellent balance of security and product visibility while maintaining airflow and aesthetics."
},
{
  slug: "swing-gate",
  title: "Swing Gate",
  description: "Classic charm meets advanced technology with our automatic swing gates, ensuring graceful entry every time.",
  imageSrc: "/homepage/swinggate.jpg",
  features: [
    "Sturdy steel or aluminum construction for long-lasting durability",
    "Smooth and silent operation with precision-engineered hinges",
    "Manual and automated options with remote access control",
    "Weather-resistant coating to withstand harsh conditions",
    "Safety sensors and obstacle detection for secure operation",
    "Customizable designs, finishes, and sizes to suit any property"
  ],
  applications: "Perfect for residential driveways, gated communities, commercial buildings, and industrial premises. Offers an elegant and secure solution with minimal maintenance."
},
];

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-[rgb(142,22,22)] text-white py-12 md:py-20">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Secure Your Space with Smart Gates
              </h1>
              <p className="text-lg md:text-xl mb-6">
                Enhance your property's security and convenience with our
                state-of-the-art automatic gates and doors.
              </p>
              <Link
                href="https://wa.me/971504085867?text=Hello"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-white text-[rgb(142,22,22)] hover:bg-blue-50">
                  Get a Quote
                </Button>
              </Link>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/homepage/Hero.jpg"
                alt="Automatic Gate"
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
              Why Choose Leadergates Automatic Doors?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <FeatureCard
                icon={<Shield className="h-10 w-10 md:h-12 md:w-12 text-[rgb(142,22,22)]" />}
                title="Enhanced Security"
                description="Our gates provide an extra layer of protection for your property."
              />
              <FeatureCard
                icon={<DoorOpen className="h-10 w-10 md:h-12 md:w-12 text-[rgb(142,22,22)]" />}
                title="Convenience"
                description="Effortlessly open and close your gates with our smart systems."
              />
              <FeatureCard
                icon={<Clock className="h-10 w-10 md:h-12 md:w-12 text-[rgb(142,22,22)]" />}
                title="24/7 Support"
                description="Our team is always ready to assist you with any issues."
              />
            </div>
          </div>
        </section>

        {/* Products Showcase */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
              Our Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {products.map((product) => (
                <ProductCard
                  key={product.slug}
                  product={product}
                  onClick={() => openModal(product)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[rgb(142,22,22)] text-white py-12 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Upgrade Your Security?
            </h2>
            <p className="text-lg md:text-xl mb-6 md:mb-8">
              Contact us today for a free consultation and quote.
            </p>
            <Link
              href="https://wa.me/971504085867?text=Hello"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-white text-[rgb(142,22,22)] hover:bg-blue-50">
                <Phone className="h-5 w-5 mr-2" />
                Contact Us
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
      />
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function ProductCard({ product, onClick }) {
  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105"
      onClick={onClick}
    >
      <Image
        src={product.imageSrc || "/placeholder.svg"}
        alt={product.title}
        width={400}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
        <p className="text-gray-600">{product.description}</p>
      </div>
    </div>
  );
}


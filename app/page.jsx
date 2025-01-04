import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  DoorOpenIcon as Gate,
  DoorOpen,
  Shield,
  Clock,
  Phone,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-blue-600 text-white py-20">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Secure Your Space with Smart Gates
              </h1>
              <p className="text-xl mb-6">
                Enhance your property's security and convenience with our
                state-of-the-art automatic gates and doors.
              </p>
              <Link
              href="https://wa.me/971504085867?text=Hello"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-white text-blue-600 hover:bg-blue-50">
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
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Choose Leadergates Automatic Doors?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Shield className="h-12 w-12 text-blue-600" />}
                title="Enhanced Security"
                description="Our gates provide an extra layer of protection for your property."
              />
              <FeatureCard
                icon={<DoorOpen className="h-12 w-12 text-blue-600" />}
                title="Convenience"
                description="Effortlessly open and close your gates with our smart systems."
              />
              <FeatureCard
                icon={<Clock className="h-12 w-12 text-blue-600" />}
                title="24/7 Support"
                description="Our team is always ready to assist you with any issues."
              />
            </div>
          </div>
        </section>

        {/* Products Showcase */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProductCard
                imageSrc="/homepage/RollingShutter.jpg"
                title="Rolling Shutter"
                description="Secure your spaces effortlessly with sleek, sturdy, and customizable rolling shutters designed for homes and businesses alike.

."
              />
              <ProductCard
                imageSrc="/homepage/motor.jpg"
                title="Sliding Gate Motor"
                description="Experience the power of automation with our sliding gate motors, blending speed, strength, and reliability for effortless access control."
              />
              <ProductCard
                imageSrc="/homepage/garagedoors.jpg"
                title="Over Head Garage Door"
                description="Elevate your garage with our durable and stylish overhead doors, built for smooth operation and ultimate convenience."
              />
              <ProductCard
                imageSrc="/homepage/gatebarrier.jpg"
                title="Gate Barrier"
                description="Control traffic with precision using our robust gate barriers—perfect for parking lots and secure entry points.."
              />
              <ProductCard
                imageSrc="/homepage/slidingGate.jpg"
                title="Sliding Gate"
                description="Add elegance and functionality to your property with sliding gates, offering smooth movement and modern aesthetics."
              />
              <ProductCard
                imageSrc="/homepage/fireratedShutter.jpg"
                title="Fire Rated Shutters"
                description="Shield your property with our fire-rated shutters, engineered for top-notch safety and durability, offering seamless fire resistance without compromising style."
              />
              <ProductCard
                imageSrc="/homepage/fastdoororsinglegate.jpg"
                title="Fast Door / Single Gate"
                description="Speed meets style in our fast doors and single gates, delivering quick access with a sleek design tailored for busy environments."
              />
              <ProductCard
                imageSrc="/homepage/automaticperforaterollingshutter.jpg"
                title="Automatic Perforate Rolling Shutter"
                description="Combine security and visibility with automatic perforated rolling shutters—perfect for showcasing while keeping things safe."
              />
              <ProductCard
                imageSrc="/homepage/swinggate.jpg"
                title="Swing Gate"
                description="Classic charm meets advanced technology with our automatic swing gates, ensuring graceful entry every time."
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Upgrade Your Security?
            </h2>
            <p className="text-xl mb-8">
              Contact us today for a free consultation and quote.
            </p>
            <Link
              href="https://wa.me/971504085867?text=Hello"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-white text-blue-600 hover:bg-blue-50">
                <Phone className="h-5 w-5 mr-2" />
                Contact Us
              </Button>
            </Link>
          </div>
        </section>
      </main>
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

function ProductCard({ imageSrc, title, description }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Image
        src={imageSrc}
        alt={title}
        width={400}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Button variant="outline">Learn More</Button>
      </div>
    </div>
  );
}

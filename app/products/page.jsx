import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DoorOpenIcon as Gate, Phone, Mail, Globe } from "lucide-react";

const products = [
  {
    name: "Sliding Doors",
    description: "Experience elegance and convenience with our premium sliding doors—engineered for smooth operation, space efficiency, and a modern aesthetic that complements any setting.",
    image: "/homepage/automatic sliding doors.jpg"
  },
  {
    name: "Rolling Shutters",
    description: "Elevate your entrances with our sleek and modern revolving doors—designed for seamless functionality, energy efficiency, and a touch of sophistication that leaves a lasting impression.",
    image: "/homepage/rollingShutters.jpg"
  },
  {
    name: "Shutters",
    description: " Combine security, style, and functionality with our premium shutters—crafted to protect your spaces while adding a sleek, modern touch to your property. Perfect for homes, businesses, and industrial needs. ",
    image: "/homepage/highspeed.jpg"
  },
  {
    name: "Garage Doors",
    description: "Enhance your space with our premium garage doors—designed for durability, smooth operation, and modern aesthetics that complement any property.",
    image: "/homepage/garagedoors.jpg"
  },
  {
    name: "Gates & Accessories",
    description: "Discover a perfect blend of security and style with our premium gates and accessories. From robust gate motors to sleek barriers, we offer innovative solutions tailored to enhance convenience, safety, and elegance for your property.",
    image: "/homepage/gatesAndacceseries.jpg"
  },
];

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
        <p className="text-center mb-8 max-w-2xl mx-auto">
          Leader Gate specializes in automatic doors and gates. We offer a wide
          range of products including sliding doors, revolving doors, shutters,
          garage doors, barriers, and more.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </main>
    </div>
  );
}

function ProductCard({ name, description, image }) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <Image
          src={image}
          alt={name}
          width={400}
          height={300}
          className="w-full h-48 object-cover mb-4 rounded-md"
        />
        <p className="text-gray-600">{description}</p>
      </CardContent>
      <CardFooter>
        <a
          href="https://wa.me/971504085867?text=Hello"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
        >
          <Button className="w-full bg-blue-400">Contact Us</Button>
        </a>
      </CardFooter>
    </Card>
  );
}
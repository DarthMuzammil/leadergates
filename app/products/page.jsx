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
    description: "Automatic sliding doors for commercial settings.",
    image: "/homepage/automatic sliding doors.jpg"
  },
  {
    name: "Revolving Doors",
    description: "Elegant revolving door systems for grand entrances.",
    image: "/homepage/RollUpDoors.webp"
  },
  {
    name: "Shutters",
    description: "Durable roll-up shutters for garages and commercial spaces.",
    image: "/homepage/highspeed.jpg"
  },
  {
    name: "Garage Doors",
    description: "Reliable automatic garage doors for residential use.",
    image: "/homepage/garagedoors.jpg"
  },
  {
    name: "Gates & Accessories",
    description: "Various types of automatic gates and remote controls.",
    image: "/homepage/gate.jpg"
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
        <Button className="w-full">Enquire</Button>
      </CardFooter>
    </Card>
  );
}

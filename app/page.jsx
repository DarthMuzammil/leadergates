import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DoorOpenIcon as Gate, DoorOpen, Shield, Clock, Phone } from "lucide-react"

export default function Home() {
  return (
    (<div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Gate className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-800">Leadergates Automatic Doors</span>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li><Link href="#" className="text-gray-600 hover:text-blue-600">Home</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-blue-600">Products</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-blue-600">About</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-blue-600">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-blue-600 text-white py-20">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Secure Your Space with Smart Gates</h1>
              <p className="text-xl mb-6">Enhance your property's security and convenience with our state-of-the-art automatic gates and doors.</p>
              <Button className="bg-white text-blue-600 hover:bg-blue-50">Get a Quote</Button>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/homepage/Hero.jpg"
                alt="Automatic Gate"
                width={600}
                height={400}
                className="rounded-lg shadow-lg" />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Leadergates Automatic Doors?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Shield className="h-12 w-12 text-blue-600" />}
                title="Enhanced Security"
                description="Our gates provide an extra layer of protection for your property." />
              <FeatureCard
                icon={<DoorOpen className="h-12 w-12 text-blue-600" />}
                title="Convenience"
                description="Effortlessly open and close your gates with our smart systems." />
              <FeatureCard
                icon={<Clock className="h-12 w-12 text-blue-600" />}
                title="24/7 Support"
                description="Our team is always ready to assist you with any issues." />
            </div>
          </div>
        </section>

        {/* Products Showcase */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProductCard
                imageSrc="/homepage/Shutter2.webp"
                title="Galvanized Steel Rolling Shutter"
                description="The Leadergates' Rolling Shutter Door are known for its high quality workmanship and reliable designs which serves to cater for residential, industrial and commercial purposes." />
              <ProductCard
                imageSrc="/homepage/Shutter1.webp"
                title="Side Motor & Tubular Motor"
                description="We have all types of rolling shutter motors including high-speed motors. Rolling Shutter Side Motors according to your requirements. We replace and fix rolling shutter motors also." />
                              <ProductCard
                imageSrc="/homepage/PolycarbonateRollingShutter1.webp"
                title="Polycarbonate Rolling Shutters"
                description="Anti UV Transparent Polycarbonate Rolling Shutter Door with aluminum tubes. Maxwell always custom built polycarbonate rolling shutters which combines the transparency and strength of polycarbonate with extruded aluminum joining slat." />
                              <ProductCard
                imageSrc="/homepage/InsulatedAluminium.webp"
                title="Insulated Aluminium Rolling Shutter"
                description="
Aluminum Insulated roller shutter door are ideal for areas where energy conservation is of prime concern, such as Warehouses, distribution centers, garages/factories, equipment noise partitioning, paint spray booths, maintenance buildings and storage facilities." />
                              <ProductCard
                imageSrc="/homepage/GrillShutters.webp"
                title="Grill Shutters"
                description="The business that needs protection in a not-completely-enclosed environment such as a business in an indoor mall, school, airport, convention center or related locations security grill shutters may be the answer for requirements." />
                              <ProductCard
                imageSrc="/homepage/FireRated.webp"
                title="Fire Rated Shutters"
                description="Leadergates' Steel Fire Rated Rolling Shutters are part of a passive fire protection system to reduce the spread of smoke or fire  between compartments and to enable safe exit from a building or structure with tested and approved door hardware ." />
                              <ProductCard
                imageSrc="/homepage/RollUpDoors.webp"
                title="Roll Up Doors"
                description="Pre painted Continued sheet Roll Up Doors provides the convenience of installation with the look of most popular sectional door with cheaper prices. Roller Shutters provide high strength security and are easy to operate." />
                              <ProductCard
                imageSrc="/homepage/HighSpeedShutter.webp"
                title="High Speed Shutters"
                description="Leadergates' High Speed Doors is a effective product plus energy savings. We work with dedication and passion since 2009 to offer to our customers the best value for money and reliable and durable  high speed PVC doors." />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Upgrade Your Security?</h2>
            <p className="text-xl mb-8">Contact us today for a free consultation and quote.</p>
            <Button className="bg-white text-blue-600 hover:bg-blue-50">
              <Phone className="h-5 w-5 mr-2" />
              Contact Us
            </Button>
          </div>
        </section>
      </main>
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-2xl font-bold">Leadergates Automatic Doors</span>
              <p className="mt-2">Securing homes and businesses since 2000</p>
            </div>
            <nav>
              <ul className="flex space-x-6">
                <li><Link href="#" className="hover:text-blue-400">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-blue-400">Terms of Service</Link></li>
                <li><Link href="#" className="hover:text-blue-400">Contact</Link></li>
              </ul>
            </nav>
          </div>
          <div className="mt-8 text-center text-sm">
            © {new Date().getFullYear()} Leadergates Automatic Doors. All rights reserved.
          </div>
        </div>
      </footer>
    </div>)
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    (<div className="bg-white p-6 rounded-lg shadow-md text-center">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>)
  );
}

function ProductCard({ imageSrc, title, description }) {
  return (
    (<div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Image
        src={imageSrc}
        alt={title}
        width={400}
        height={300}
        className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Button variant="outline">Learn More</Button>
      </div>
    </div>)
  );
}


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">About Leader Gate</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Welcome to Leader Gate Automatic Doors</h2>
        <p className="text-gray-700 mb-4">
          Leader Gate is a leading provider of Automatic Gate, Doors, Barriers & Security Control Solutions. We specialize in the design and installation of high-quality motorized steel and aluminium gates, automatic doors, barriers, roll up shutters, and parking shutters.
        </p>
        <p className="text-gray-700 mb-4">
          Our products are designed to meet the specific needs of our clients and are available in a variety of styles, sizes, and colors to suit any property. We are committed to delivering exceptional service and strive to exceed our clients' expectations.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">About Our Company</h2>
        <p className="text-gray-700 mb-4">
          Leader Gate is a leading company in UAE, dealing with internationally recognized brands of a vast variety of security products. Our solutions cater to the safety needs of business spaces, offices, shops, workshops, parking areas, storage go-downs, and more.
        </p>
        <p className="text-gray-700 mb-4">
          We are engaged in all automation works such as rolling shutter industrial shutters, swing gates, sliding gates, garage doors, industrial doors, and parking barriers. Our focus is strictly on quality result output, using only raw materials of industry standard from legitimate suppliers to ensure a hassle-free experience for our customers.
        </p>
        <p className="text-gray-700 mb-4">
          We manufacture, repair, supply, and install all kinds of products for homes, commercial places, and public spaces. Additionally, we design and manufacture important controllers required to drive these gates and turnstiles, making the process automatic and easy to maintain.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Mission and Vision</h2>
        <Card className="mb-4">
          <CardHeader>
            <CardTitle>Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p>To offer our customers a dedicated high-quality service with best prices and great innovation.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Vision</CardTitle>
          </CardHeader>
          <CardContent>
            <p>To be the No. 1 company providing Automation Works.</p>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "AUTOMATIC DOORS",
            "AUTOMATIC GATES & MOTOR",
            "GARAGE DOORS & MOTORS",
            "CAR PARKING SOLUTIONS",
            "ROLLING SHUTTERS & MOTOR",
            "TURNSTILES",
            "SECURITY BOLLARDS",
            "FIRE-RATED DOORS",
            "ACCESS CONTROL",
            "UNIQUE AND QUALITY HARDWARE",
            "GATE FABRICATION",
            "REPAIR & MAINTENANCE"
          ].map((service, index) => (
            <li key={index} className="bg-gray-100 p-4 rounded-lg text-center">{service}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Our Prestigious Clients</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "FAB Properties",
            "AG Engineering",
            "EFG-Emirates Float Glass",
            "Etisalat",
            "Rixos Premium Hotels",
            "Exeed Group",
            "ZMS Properties",
            "Adeeb Group",
            "Reliance FM",
            "Saadiyat Beach Villas",
            "Saadiyat Beach Residence",
            "Jawaher Villas- Saadiyat",
            "Marina Village Community",
            "Al Raha Gardens"
          ].map((client, index) => (
            <li key={index} className="bg-blue-100 p-4 rounded-lg text-center">{client}</li>
          ))}
        </ul>
      </section>
    </div>
  )
}


import Link from "next/link"
import { Button } from "./ui/button"

const plans = [
  {
    name: "Básico",
    speed: "10 Mbps",
    price: "$20",
    features: ["Ideal para navegación", "Correo y redes sociales", "Soporte 24/7"],
  },
  {
    name: "Estándar",
    speed: "50 Mbps",
    price: "$40",
    features: ["Streaming HD", "Juegos en línea", "Múltiples dispositivos"],
  },
  {
    name: "Premium",
    speed: "100 Mbps",
    price: "$60",
    features: ["Streaming 4K", "Descargas rápidas", "Dispositivos ilimitados"],
  },
]

export default function Plans() {
  return (
    <section id="plans" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Elige tu Plan Perfecto</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`bg-white rounded-lg shadow-lg p-8 flex flex-col ${index === 1 ? "border-2 border-primary-500 transform scale-105" : ""}`}
            >
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-4xl font-bold mb-4 text-primary-600">
                {plan.price}
                <span className="text-sm font-normal text-gray-600">/mes</span>
              </p>
              <p className="text-lg mb-6 text-gray-600">{plan.speed}</p>
              <ul className="mb-8 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="mb-2 flex items-center text-gray-700">
                    <svg
                      className="w-5 h-5 mr-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                variant="secondary"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                asChild
              >
                <Link href="#contact">¡SOLICITAR Tu Servicio Ahora!</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


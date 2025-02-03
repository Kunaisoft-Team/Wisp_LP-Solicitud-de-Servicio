import Link from "next/link"
import { Button } from "./ui/button"

const testimonials = [
  {
    name: "María Rodríguez",
    comment:
      "Wisp ha transformado mi experiencia de trabajo desde casa. ¡Las velocidades son increíbles y su servicio al cliente es excelente!",
    avatar: "/avatar1.jpg",
  },
  {
    name: "Carlos Méndez",
    comment:
      "Nunca había tenido un internet tan confiable. Los técnicos de Wisp siempre responden rápidamente y resuelven cualquier problema.",
    avatar: "/avatar2.jpg",
  },
  {
    name: "Ana Torres",
    comment:
      "Cambiar a Wisp fue la mejor decisión para nuestra familia. Todos podemos transmitir y jugar sin ningún retraso.",
    avatar: "/avatar3.jpg",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-primary-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Lo que Dicen Nuestros Clientes</h2>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center"
            >
              <img
                src={testimonial.avatar || "/placeholder.svg"}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mb-4"
              />
              <p className="mb-4 text-gray-600 italic">"{testimonial.comment}"</p>
              <p className="font-bold text-primary-600">{testimonial.name}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button
            variant="secondary"
            size="lg"
            asChild
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          >
            <Link href="#contact">¡SOLICITAR Tu Servicio Ahora!</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}


import Link from "next/link"
import { Button } from "./ui/button"

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-24">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Internet Rápido y Confiable para Táchira</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Experimenta velocidades ultrarrápidas y un servicio al cliente inigualable con Wisp, el proveedor líder de
          Internet en Táchira
        </p>
        <div className="mb-12 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
          <div className="flex items-center">
            <svg
              className="w-6 h-6 mr-2 text-secondary-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span>Proveedor autorizado por CONATEL</span>
          </div>
          <div className="flex items-center">
            <svg
              className="w-6 h-6 mr-2 text-secondary-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span>Servicio en los 29 municipios</span>
          </div>
          <div className="flex items-center">
            <svg
              className="w-6 h-6 mr-2 text-secondary-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span>Soporte local 24/7</span>
          </div>
        </div>
        <Button
          variant="secondary"
          size="lg"
          asChild
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        >
          <Link href="#contact">¡SOLICITAR Tu Servicio Ahora!</Link>
        </Button>
      </div>
    </section>
  )
}


import Link from "next/link"
import { Button } from "./ui/button"

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary-600">
          Wisp
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <Link href="#plans" className="text-gray-600 hover:text-primary-500 transition-colors">
                Planes
              </Link>
            </li>
            <li>
              <Link href="#testimonials" className="text-gray-600 hover:text-primary-500 transition-colors">
                Testimonios
              </Link>
            </li>
            <li>
              <Link href="#payments" className="text-gray-600 hover:text-primary-500 transition-colors">
                Pagos
              </Link>
            </li>
            <li>
              <Link href="#faq" className="text-gray-600 hover:text-primary-500 transition-colors">
                Preguntas Frecuentes
              </Link>
            </li>
            <li>
              <Link href="#contact" className="text-gray-600 hover:text-primary-500 transition-colors">
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
        <Button
          variant="secondary"
          asChild
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        >
          <Link href="#contact">¡SOLICITAR Wisp!</Link>
        </Button>
      </div>
    </header>
  )
}


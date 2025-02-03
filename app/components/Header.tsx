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
        <Button asChild>
          <Link href="#contact">Empezar</Link>
        </Button>
      </div>
    </header>
  )
}


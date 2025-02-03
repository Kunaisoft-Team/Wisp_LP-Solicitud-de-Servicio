import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Wisp</h3>
            <p className="text-sm text-gray-300">
              Proporcionando servicios de internet rápidos y confiables en Táchira, Venezuela.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#plans" className="text-gray-300 hover:text-white transition-colors">
                  Planes
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-gray-300 hover:text-white transition-colors">
                  Testimonios
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-gray-300 hover:text-white transition-colors">
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contáctanos</h3>
            <p className="text-sm text-gray-300 mb-2">Email: info@wisp.com</p>
            <p className="text-sm text-gray-300">Teléfono: +58 123 456 7890</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Wisp. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}


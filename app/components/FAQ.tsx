"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const faqs = [
  {
    question: "¿En qué áreas de Táchira ofrece servicio Wisp?",
    answer:
      "Wisp proporciona servicios de internet en los 29 municipios del estado Táchira, asegurando una cobertura integral en toda la región.",
  },
  {
    question: "¿Qué tan rápidas son las velocidades de internet de Wisp?",
    answer:
      "Wisp ofrece una gama de velocidades desde 10 Mbps hasta 100 Mbps, adaptándose a diferentes necesidades y presupuestos. Nuestra red de fibra óptica garantiza velocidades consistentes y confiables.",
  },
  {
    question: "¿Wisp es un proveedor de servicios de internet autorizado?",
    answer:
      "Sí, Wisp está completamente autorizado por CONATEL (Comisión Nacional de Telecomunicaciones de Venezuela) para operar como ISP en Táchira.",
  },
  {
    question: "¿Qué tipo de soporte al cliente ofrece Wisp?",
    answer:
      "Proporcionamos soporte al cliente local las 24 horas, los 7 días de la semana. Nuestro equipo está basado en Táchira y siempre está listo para ayudarte con cualquier consulta o problema técnico.",
  },
  {
    question: "¿Puedo cambiar mi plan?",
    answer:
      "Puedes cambiar tu plan en cualquier momento. Contacta a nuestro equipo de soporte al cliente y ellos te guiarán a través del proceso.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Preguntas Frecuentes</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex justify-between items-center w-full text-left font-semibold p-4 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors duration-200"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span>{faq.question}</span>
                <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-2 p-4 bg-white rounded-lg shadow-md"
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


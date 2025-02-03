"use client"

import { useState } from "react"
import { Button } from "./ui/button"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    nationalId: "",
    plan: "",
    address: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission here (e.g., send data to server)
    console.log(formData)
    // Reset form after submission
    setFormData({ name: "", nationalId: "", plan: "", address: "" })
  }

  return (
    <section id="contact" className="py-24 bg-primary-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">¡SOLICITAR Tu Servicio Ahora!</h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Nombre y Apellido
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="nationalId" className="block text-sm font-medium text-gray-700 mb-1">
              Cédula de Identidad
            </label>
            <input
              type="text"
              id="nationalId"
              name="nationalId"
              value={formData.nationalId}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="plan" className="block text-sm font-medium text-gray-700 mb-1">
              Elige un Plan
            </label>
            <select
              id="plan"
              name="plan"
              value={formData.plan}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="">Selecciona un plan</option>
              <option value="basic">Básico</option>
              <option value="standard">Estándar</option>
              <option value="premium">Premium</option>
            </select>
          </div>
          <div className="mb-6">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
              Dirección
            </label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          >
            ¡SOLICITAR Tu Servicio Ahora!
          </Button>
        </form>
      </div>
    </section>
  )
}


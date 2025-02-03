import Image from "next/image"

const paymentMethods = [
  { name: "Banesco", logo: "/pago-banesco.jpeg" },
  { name: "Bancolombia", logo: "/pago-bancolombia.png" },
  { name: "Efectivo", logo: "/pago-efectivo.png" },
]

export default function PaymentMethods() {
  return (
    <section id="payments" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Formas de Pago</h2>
        <div className="flex justify-center items-center space-x-8">
          {paymentMethods.map((method) => (
            <div key={method.name} className="flex flex-col items-center">
              <Image
                src={method.logo || "/placeholder.svg"}
                alt={method.name}
                width={80}
                height={50}
                className="mb-2"
              />
              <p className="text-sm text-gray-600">{method.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


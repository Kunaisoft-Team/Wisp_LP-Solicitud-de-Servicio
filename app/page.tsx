import Header from "./components/Header"
import Hero from "./components/Hero"
import Plans from "./components/Plans"
import Testimonials from "./components/Testimonials"
import PaymentMethods from "./components/PaymentMethods"
import ContactForm from "./components/ContactForm"
import FAQ from "./components/FAQ"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Plans />
        <Testimonials />
        <FAQ />
        <PaymentMethods />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}


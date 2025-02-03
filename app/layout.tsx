import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Wisp Tachira | Solicitud de Servicio',
  description: 'Internet Rápido y Confiable para Táchira',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

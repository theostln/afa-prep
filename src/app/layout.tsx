import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AFA Prep - Préparation Examen Intermédiaire d\'Assurance',
  description: 'Plateforme de préparation à l\'examen AFA - Compétences et connaissances générales pour devenir intermédiaire d\'assurance',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}

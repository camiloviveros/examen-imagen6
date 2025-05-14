import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Qatar Airways Ticket',
  description: 'Qatar Airways Flight Ticket Interface',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 flex justify-center items-center min-h-screen">
        {children}
      </body>
    </html>
  )
}
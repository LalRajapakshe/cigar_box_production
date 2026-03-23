import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Cigar Box Production System',
  description: 'Manage cigar box orders, cutting planning, and production',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <nav className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="flex items-center">
                <h1 className="text-2xl font-bold text-gray-900">📦 Cigar Box Pro</h1>
              </div>
              <div className="flex space-x-4">
                <a href="/" className="text-gray-700 hover:text-gray-900">Home</a>
                <a href="/planning" className="text-gray-700 hover:text-gray-900">Planning</a>
                <a href="/orders" className="text-gray-700 hover:text-gray-900">Orders</a>
              </div>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}

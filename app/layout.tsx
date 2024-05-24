import type { Metadata } from "next"
import "./globals.css"
import Header from "./components/Header"
import Providers from "./components/Providers"
import Footer from "./components/Footer"

export const metadata: Metadata = {
  title: "The BRUTAL News",
  description: "News for the BRUTAL people",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>

      <body className="bg-gray-100 dark:bg-gray-950 transition-all duration-700">
        <Providers>
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </Providers>
      </body>

    </html>
  )
}

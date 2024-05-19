import type { Metadata } from "next"
import "./globals.css"
import Header from "./Header"
import Providers from "./Providers"
import { ThemeProvider } from "next-themes"
import Footer from "./Footer"

export const metadata: Metadata = {
  title: "My Blog",
  description: "A blog about technology and programming.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>

      <body className="bg-gray-100 dark:bg-slate-900 transition-all duration-700">
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

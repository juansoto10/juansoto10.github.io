import './globals.css'
import { Play } from 'next/font/google'
import { Inter } from 'next/font/google'
import { Overpass_Mono } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// const play = Play({
//   weight: ['400', '700'],
//   variable: '--sec-font',
//   subsets: ['latin'],
// })

const overpassMono = Overpass_Mono({
  variable: '--sec-font',
  subsets: ['latin'],
})

const inter = Inter({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--body-font',
  subsets: ['latin'],
})

export const metadata = {
  title: 'Juan Soto',
  description: 'Web Developer React - Django',
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${overpassMono.variable} scroll-smooth`}
    >
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="favicon/safari-pinned-tab.svg"
          color="#160ef4"
        />
        <meta name="msapplication-TileColor" content="#000000" />
        {/* <meta name="theme-color" content="#ffffff" /> */}
      </head>

      <body className="font-body">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

import Footer from './component/footer'
import Navbar from './component/Navbar'
import './globals.css'
import { Fasthand } from 'next/font/google'
import { Poppins } from 'next/font/google'

const fast = Fasthand({
  subsets:['latin'],
  weight:['400']
})
const popp = Poppins({
  subsets:['latin'],
  weight:['200']
})



export const metadata = {
  title: 'Learning Next js',
  description: 'Understanding the priciples of next',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={fast.className}>
        <Navbar/>
        <main className={`min-h-[400px] text-center text-2xl ${popp.className} `}>
  {children}
   </main>
        <Footer/>
      </body>
    </html>
  )
}


import { NavBar } from '@/components/NavBar'
import './globals.css'
import { Inter } from 'next/font/google'
import AsideBar from '@/components/AsideBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/logo.jpg" />
      <body className={inter.className}>
        <NavBar/>
        <div className='flex mr-5 ml-5'>
          <AsideBar />
          {children}
        </div>
        </body>
    </html>
  )
}

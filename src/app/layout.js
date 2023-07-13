import { Navbar, Footer } from '@/components'
import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/context/ThemeContext'
import AuthProvider from '@/components/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Posts Next',
  description: 'My site to post what you want to post',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt" >

      <body className={inter.className} suppressHydrationWarning={true} >
        <ThemeProvider>
          <AuthProvider>
          <div className='max-w-[1400px] m-auto w-full min-h-[100vh] flex flex-col justify-between'>
            <Navbar />
            {children}
            <Footer />
          </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

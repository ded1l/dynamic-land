import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import { Suspense } from 'react'
import Container from '../component/Container/container'
import Header from '../component/header/Header'
import Footer from '../component/footer/Footer'
import Loading from './Loading'
// import Loading from './Loading'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nebula',
  description: 'landing page creator',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>
<Providers>
  <div className='main'>
<Header className="sticky-header" />     
   <Container>
    <Suspense fallback={<div> <Loading/> </div>}>
        {children}
    </Suspense>
        </Container>
        <Footer/>
        </div>
        </Providers>
        </body>
    </html>
  )
}

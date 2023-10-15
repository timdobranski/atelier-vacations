import './globals.css'
import { Inter } from 'next/font/google'



export const metadata = {
  title: 'Parkway Academy',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body id='app'>
      {/* <h1 id={'title'}>PARKWAY ACADEMY</h1> */}
        {children}
        </body>
    </html>
  )
}

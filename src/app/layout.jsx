import { NavBar } from '@/components/NavBar'
import AsideBar from '@/components/AsideBar'

import { Inter } from 'next/font/google'
import { Aviso } from '@/components/Aviso';

import Noticia from "@/models/Noticia";
import { conectDB } from "@/utils/mongoose"

import './globals.css'

const IMAGEN_URL = process.env.IMAGEN_URL;
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Electro Avenida',
  description: 'Tienda de Materiales Electrico',
}
async function traerAviso() {
    await conectDB();
    const noticia = await Noticia.findOne({tipo:'Aviso'});
    return noticia
}

export default async function RootLayout({ children }) {
  const aviso = await traerAviso();
  return (
    <html lang="en">
      <link rel="icon" href={IMAGEN_URL + '/Logo'} />
      <body className={inter.className}>
        {
          aviso && <Aviso aviso={aviso.texto}/>
        }
        <NavBar/>
          <div className='flex'>
            <AsideBar/>
            {children}
          </div>
        </body>
    </html>
  )
}

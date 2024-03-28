'use client'

import Link from "next/link"
import { InputBuscador } from "./InputBuscador"
import { MenuBar } from "./MenuBar"
import { useState } from "react"
import Image from "next/image"
const IMAGEN_URL = process.env.IMAGEN_URL;

export const NavBar = () => {
    const [menuHamb,setMenuHamb] = useState(false);

    const handleMenuHamb = () => {
        setMenuHamb(!menuHamb);
    };

  return (
    
    <header className="flex bg-yellow-200 pt-2 pb-4 justify-around border-b-2 border-gray-600">
            <Link href={'/'}>
                <figure className="cursor-pointer">
                    <Image src={IMAGEN_URL + 'EA.png'} className="h-16" alt="Logo" width={210} height={100}/>
                </figure>
            </Link>
            
            <InputBuscador />
            
            <nav id="navegacion" className="flex justify-around gap-5">
                <Link className="self-center" href='/productos'><p className="text-2xl cursor-pointer hover:text-gray-600 ">Productos</p></Link>
                <Link className="self-center" href='/productos/ofert'><p className="text-2xl cursor-pointer hover:text-gray-600 self-center">Ofertas</p></Link>
                <Link className="self-center" href='/contacto'><p className="text-2xl cursor-pointer hover:text-gray-600 self-center">Contacto</p></Link>
            </nav>

            <div id="hamb" className="hidden" onClick={handleMenuHamb}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <MenuBar display={menuHamb}/>
            </div>
        </header>
  )
}

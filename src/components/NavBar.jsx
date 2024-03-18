import Link from "next/link"
import { InputBuscador } from "./InputBuscador"

export const NavBar = () => {
  return (
    <header className="flex bg-yellow-200 pt-2 pb-4 justify-around border-b-2 border-gray-600">
            <Link href={'/'}>
                <figure className="cursor-pointer">
                    <img src="/logoSinFondo2.png" alt="" className="h-16" />
                </figure>
            </Link>
            
            <InputBuscador />
            
            <nav className="flex justify-around gap-5">
                <Link className="self-center" href='/productos'><p className="text-2xl cursor-pointer hover:text-gray-600 ">Productos</p></Link>
                <Link className="self-center" href='/productos/ofert'><p className="text-2xl cursor-pointer hover:text-gray-600 self-center">Ofertas</p></Link>
                <Link className="self-center" href='/contacto'><p className="text-2xl cursor-pointer hover:text-gray-600 self-center">Contacto</p></Link>
            </nav>
        </header>
  )
}

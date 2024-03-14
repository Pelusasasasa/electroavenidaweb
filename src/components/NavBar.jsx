import Link from "next/link"
import { InputBuscador } from "./InputBuscador"

export const NavBar = () => {
  return (
    <header className="flex bg-gray-300 pt-2 pb-2 justify-around mb-2">
            <Link href={'/'}>
                <figure className="cursor-pointer">
                    <img src="/logoSinFondo2.png" alt="" className="h-16" />
                </figure>
            </Link>
            
            <InputBuscador />
            
            <nav className="flex justify-around gap-5">
                <Link className="self-center" href='/productos'><p className="text-2xl cursor-pointer hover:text-yellow-200 ">Productos</p></Link>
                <Link className="self-center" href='/ofertas'><p className="text-2xl cursor-pointer hover:text-yellow-200 self-center">Ofertas</p></Link>
                <Link className="self-center" href='/contacto'><p className="text-2xl cursor-pointer hover:text-yellow-200 self-center">Contacto</p></Link>
            </nav>
        </header>
  )
}

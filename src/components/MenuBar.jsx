import Link from "next/link"

export const MenuBar = ({display}) => {
    
  return (
    <div id="menuBar" className={display ? 'flex' : 'hidden'}>
        <nav className="flex flex-col absolute z-10 bg-yellow-200 right-0.5 px-6 py-2 justify-around gap-5">
            <Link className="self-center" href='/productos'><p className="text-2xl cursor-pointer hover:text-gray-600 ">Productos</p></Link>
            <Link className="self-center" href='/marcas'><p className="text-2xl cursor-pointer hover:text-gray-600 ">Marcas</p></Link>
            <Link className="self-center" href='/productos/ofert'><p className="text-2xl cursor-pointer hover:text-gray-600 self-center">Ofertas</p></Link>
            <Link className="self-center" href='/contacto'><p className="text-2xl cursor-pointer hover:text-gray-600 self-center">Contacto</p></Link>
        </nav>
    </div>
  )
}

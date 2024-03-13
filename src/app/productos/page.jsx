import {useServer} from 'next/server';
import { conectDB } from "@/utils/mongoose";
import Productos from "@/models/Product";
import Rubro from "@/models/Category";
import { ProductCard } from "@/components/ProductCard";
import { Category } from "@/components/Category";
import { InputBuscador } from "@/components/InputBuscador";


async function loadProductos() {
    await conectDB();
    const productos = await Productos.find().limit(120);
    return productos;
};

async function loadCategorias() {
    await conectDB();
    const categorias = await Rubro.find();
    return categorias;
}

export default async function page(){

    const productos = await loadProductos();
    const categorias = await loadCategorias();

  return (
    <>
        <header className="flex bg-gray-300 pt-2 pb-2 justify-around mt-2 mb-2">
            <figure className="cursor-pointer">
                <img src="/electro.jpg" alt="" className="h-12" />
            </figure>
            
            <InputBuscador />
            
            <nav className="flex justify-around gap-5">
                <p className="text-2xl cursor-pointer hover:text-yellow-200 self-center">Productos</p>
                <p className="text-2xl cursor-pointer hover:text-yellow-200 self-center">Ofertas</p>
                <p className="text-2xl cursor-pointer hover:text-yellow-200 self-center">Contacto</p>
            </nav>
        </header>
        <section className=" flex mr-5 ml-5">
            <aside className="w-fit">
                <h4 className="font-bold text-2xl ">Categorias</h4>
                <ul className="list-none gap-5 flex flex-col mt-5 justify-around">
                    {
                    categorias.map( category => (
                        <Category key={category.codigo} datos={JSON.stringify(category)}/>
                    ))
                    }
                </ul>
            </aside>
            <main className="grid grid-cols-4 gap-5 ml-3 p-2 bg-gray-200">
                {
                    productos.map(producto => {
                        return <ProductCard key={producto._id} {...producto} />
                    })    
                }
            </main>
        </section>
    </>
  )
}

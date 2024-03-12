import { conectDB } from "@/utils/mongoose"
import Productos from "@/models/Product"
import Rubro from "@/models/Category"
import { ProductCard } from "@/components/ProductCard";
import { Category } from "@/components/Category";


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
    console.log(categorias)

  return (
    <>
        <header className="flex bg-gray-300 pt-2 pb-2 justify-around mt-2 mb-2">
            <figure className="cursor-pointer">
                <img src="/electro.jpg" alt="" className="h-12" />
            </figure>
            
            <input type="text" className="align-middle w-96 border rounded-lg bg-slate-300 border-black text-black pl-2" placeholder="Que estas Buscando?" />
            
            <nav className="flex justify-around gap-5">
                <p className="text-2xl cursor-pointer hover:text-yellow-200 self-center">Productos</p>
                <p className="text-2xl cursor-pointer hover:text-yellow-200 self-center">Ofertas</p>
                <p className="text-2xl cursor-pointer hover:text-yellow-200 self-center">Contacto</p>
            </nav>
        </header>
        <section className="container flex mx-auto">
            <aside>
                <h4>Categorias</h4>
                <ul className="list-none gap-5 flex flex-col justify-around">
                    {
                    categorias.map( category => {
                        return <Category key={category.codigo} {...category}/>
                    })
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

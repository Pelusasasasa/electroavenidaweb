import { conectDB } from "@/utils/mongoose";
import Productos from "@/models/Product";
import Rubro from "@/models/Category";
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
};

export default async function page(){

    const productos = await loadProductos();
    const categorias = await loadCategorias();

  return (
    <>
        <main className="grid grid-cols-4 gap-5 ml-3 p-2">
            {
                productos.map(producto => {
                    return <ProductCard key={producto._id} {...producto} />
                })    
            }
        </main>
    </>
  )
};

import { conectDB } from "@/utils/mongoose";
import Productos from "@/models/Product";
import { ProductCard } from "@/components/ProductCard";


async function loadProductos() {
    await conectDB();
    const productos = await Productos.find({oferta:true});
    return productos;
};

export default async function page(){

    const productos = await loadProductos();

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

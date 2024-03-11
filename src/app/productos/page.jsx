import { conectDB } from "@/utils/mongoose"
import Productos from "@/models/Product"
import { ProductCard } from "@/components/ProductCard";


async function loadProductos() {
    await conectDB();
    const productos = await Productos.find().limit(10);
    return productos;
}

export default async function page(){

    const productos = await loadProductos();

  return (
    <section className="container mx-auto">
        <div className="grid grid-cols-4 gap-5 ml-3 p-2 bg-gray-200">
            {
                productos.map(producto => {
                    return <ProductCard key={producto._id} {...producto} />
                })    
            }
        </div>
    </section>
  )
}

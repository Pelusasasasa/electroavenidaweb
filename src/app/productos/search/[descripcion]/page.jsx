import { conectDB } from "@/utils/mongoose";
import Productos from "@/models/Product";
import { ProductCard } from "@/components/ProductCard";


async function loadProductos(descripcion) {
    await conectDB();
    descripcion = descripcion.replace(/%20/g, " ");
    descripcion = descripcion.replace(/%C3%B1/, "ñ");
    const productos = await Productos.find({descripcion:{$regex: descripcion, $options:'i'}});
    return productos;
};

export default async function page({params}){

    const productos = await loadProductos(params.descripcion);

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

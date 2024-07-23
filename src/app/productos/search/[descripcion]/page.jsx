import { conectDB } from "@/utils/mongoose";
import Productos from "@/models/Product";
import { ProductCard } from "@/components/ProductCard";


async function loadProductos(descripcion) {
    await conectDB();
    const productos = [];
    descripcion = descripcion.replace(/%20/g, " ");
    descripcion = descripcion.replace(/%C3%B1/, "ñ");
    
    let productosDescripcion = await Productos.find({descripcion:{$regex: descripcion, $options:'i'}});
    let productosMarca = await Productos.find({marca:{$regex: descripcion, $options:'i'}});

    productos.push(...productosDescripcion);
    productos.push(...productosMarca); 

    productos.sort((a,b) => a.descripcion.localeCompare(b.descripcion));
    return productos;
};

export default async function page({params}){

    const productos = await loadProductos(params.descripcion);

  return (
    <>
        <main id="paginaProductos" className={`w-full gap-5 ml-3 p-2 ${productos.length !== 0 ? 'place-items-center grid' : 'flex justify-center'}`}>
            {
                productos.length !== 0 
                ?
                    productos.map(producto => {
                        return <ProductCard key={producto._id} producto={producto} />
                    })    
                :
                    <div className="flex h-fit">
                        <h1 className="text-center p-2 text-2xl text-bold text-white bg-slate-600">No se encontraron productos</h1>
                    </div>

            }
        </main>
    </>
  )
};

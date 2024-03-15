import { conectDB } from '@/utils/mongoose';
import Productos from "@/models/Product";
import { ProductCard } from "@/components/ProductCard";

async function loadProductos(category,subCategory) {
    await conectDB();
    subCategory = subCategory.replace("%20", " ");

    const res = await Productos.find({rubro:category});
    const productos = res.filter(producto => producto.subRubro === subCategory);
    return productos;
};


export default async function page({params}) {
  const {category,subCategory} = params;
  const productos = await loadProductos(parseInt(category),subCategory);

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
}

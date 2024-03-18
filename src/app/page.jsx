import Product from "@/models/Product";
import { conectDB } from "@/utils/mongoose";

import '@/app/style.css';
import { Carrucel } from "@/components/Carrucel";


async function getOfertas(){
  await conectDB();
  const productos = await Product.aggregate([
    {$match: {oferta:true}},
    {$sample:{size:14}}
  ]);
  return productos;
};

export default async function Home() {
  const productos = await getOfertas();
  return (

    <div className="flex flex-col border-l-2 border-gray-400 ml-2">
    <section id="novedades" className="bg-gray-300 h-56"></section>
      <div className="overflow-hidden w-full">
        <h2 className="text-2xl ml-2 mt-2">Productos en Ofertas</h2>
        <div className="animate-scroll flex whitespace-nowrap">
          <Carrucel productos={productos} id={'ofertas'}/>
        </div>
      </div>
    </div>
    
  )
}

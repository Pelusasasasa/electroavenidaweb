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

async function getDestacados(){
  await conectDB();
  const productos = await Product.aggregate([
    {$match: {destacado:true}},
    {$sample:{size:14}}
  ]);
  return productos;
};

export default async function Home() {
  const destacados = await getDestacados();
  const ofertas = await getOfertas();
  return (

    <div className="flex flex-col border-l-2 border-gray-400">
    <section id="novedades" className="bg-gray-300 h-56"></section>
      <div className="overflow-hidden w-full">
        <h2 className="text-2xl ml-4 mt-4">Productos en Destacados</h2>
        <div className="animate-scroll flex whitespace-nowrap">
          <Carrucel productos={destacados} id={'destacados'}/>
        </div>
      </div>
      <div className="overflow-hidden w-full">
        <h2 className="text-2xl ml-4 mt-4">Productos en Ofertas</h2>
        <div className="animate-scroll flex whitespace-nowrap">
          <Carrucel productos={ofertas} id={'ofertas'}/>
        </div>
      </div>
    </div>
    
  )
}

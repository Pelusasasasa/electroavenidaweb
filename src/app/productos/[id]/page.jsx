import { conectDB } from "@/utils/mongoose";
import Product from "@/models/Product";

import '@/app/productos/[id]/style.css';
import comprobarurl from "@/utils/comprobarURLImage";
import Busqueda from "@/models/Busqueda";
import Image from "next/image";

const IMAGEN_URL = process.env.IMAGEN_URL;

async function getProduct(id){
    await conectDB();
    const product = await Product.findOne({_id:id});
    return product;
};

async function postText(texto){
    await conectDB();
    const busqueda = new Busqueda({texto:texto});
    await busqueda.save();
};

export default async function page({params}){
    const id = params.id;
    const {_id,descripcion,marca,cod_fabrica,stock,precio_venta,oferta,precioOferta,datos} = await getProduct(id);
    await postText(descripcion)

    const url = await comprobarurl(`${IMAGEN_URL}${_id}`,`${IMAGEN_URL}Generica`);

  return (
    <section id="product" className="flex border-l-2 border-gray-400 pl-4 justify-around w-full">
        <div className=" flex flex-col">
            
            <div className="flex align-middle justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 self-center cursor-pointer hover:scale-125">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>

                <Image className="w-96 h-96 object-contain" src={url} alt="" width={500} height={100} />

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 self-center cursor-pointer hover:scale-125">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>

            </div>
            <div className="hidden">
                
            </div>
        </div>

        <main>

            <div id="title" className="flex flex-col w-full mt-10 border-b-2 border-gray-400 pb-5">
                <h3 className="text-center text-2xl font-bold">{descripcion}</h3>
                <div className="flex gap-10 mt-5 justify-center">
                    <p className="p-2 bg-slate-300">{marca}</p>
                    <p className="p-2 bg-slate-300">{_id}</p>
                    <p className="p-2 bg-slate-300">{cod_fabrica}</p>
                </div>
            </div>

            <div id="datos" className="flex flex-col w-full mt-10 border-b-2 border-gray-400 pb-5">
                <h3 className="text-2xl font-bold">Datos:</h3>
                {datos?.map(dato => (
                    <p key={dato} className="text-2xl">{dato}</p>
                ))}
            </div>

            <div id="precio" className="flex flex-col w-full mt-10 gap-5">
                {oferta && <p className="text-xl">Precio Oferta:${precioOferta.toFixed(2)}</p>}
                <p className={oferta ? 'line-through' : 'text-xl'}> Precio: ${precio_venta.toFixed(2)}</p>
                <p className="text-xl">Stock: {stock.toFixed(2)}</p>
            </div>

        </main>
    </section>
  )
}

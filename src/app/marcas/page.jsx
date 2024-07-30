import Marca from "@/models/Marca";
import { conectDB } from "@/utils/mongoose"
import Image from "next/image";
import Link from "next/link";

async function loadMarca(){
    await conectDB();
    const marcas = await Marca.find();
    return marcas;
}

export default async function marcas(){
    const marcas = await loadMarca();
    console.log(marcas[0].url)
  return (
    <div className="grid grid-cols-5 h-fit">
        {marcas.map(marca => (
            <a key={marca.marca} className="mx-3 my-2 cursor-pointer border border-black bg-gray-300 h-min" href={marca.url} target='_black'>
                <img className="w-52 h-20" src={marca.imgUrl} alt={marca.marca} />
                <p className="text-center text-2xl font-bold">{marca.marca}</p>
            </a>
        ))}

    </div>
  )
}

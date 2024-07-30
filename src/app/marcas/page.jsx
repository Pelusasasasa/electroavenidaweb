import Marca from "@/models/Marca";
import { conectDB } from "@/utils/mongoose"
import './style.css';

async function loadMarca(){
    await conectDB();
    const marcas = await Marca.find();
    return marcas;
}

export default async function marcas(){
    const marcas = await loadMarca();
    console.log(marcas[0].url)
  return (
    <div className="grid grid-cols-5 h-fit justify-center container" id="tarjeta-marca">
        {marcas.map(marca => (
            <a key={marca.marca} className="mx-3 my-2 cursor-pointer flex flex-col items-center  border border-black bg-gray-300 h-min relative" href={marca.url} target='_black'>
                <img className="w-52 h-20" src={marca.imgUrl} alt={marca.marca} />
                <p className="text-center text-2xl font-bold">{marca.marca}</p>
                <span className="masInfo absolute top-0 bg-black bg-opacity-95 flex text-red-600 text-2xl justify-center items-center text-center inset-0">Mas Info</span>
            </a>
        ))}

    </div>
  )
}

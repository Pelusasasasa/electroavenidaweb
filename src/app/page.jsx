import Image from "next/image";
import Link from "next/link";

import Product from "@/models/Product";
import { conectDB } from "@/utils/mongoose";

import '@/app/style.css';
import { Carrucel } from "@/components/Carrucel";
import Banner from "@/models/Banner";
import Busqueda from "@/models/Busqueda";


async function getOfertas(){
  await conectDB();
  const productos = await Product.aggregate([
    {$match: {oferta:true}},
    {$sample:{size:14}}
  ]);
  return productos;
};

async function getMasBuscados(){
  await conectDB();
  const busquedas = await Busqueda.find();

  const frecuencia = busquedas.reduce((acc,el) => {
    const texto = el.texto;
    acc[texto] = (acc[texto] || 0) + 1;

    return acc;
  },{});

  const arrayOrdenado = busquedas.sort((a,b) => frecuencia[b.texto] - frecuencia[a.texto]);

  const retorno = arrayOrdenado.filter((obj, index, self) => 
    index === self.findIndex((t) => (
      t.texto === obj.texto
    ))
  );

  const arreglo = [];

  for (let i = 0; i < 15; i++) {
    const producto = await Product.findOne({descripcion: retorno[i].texto});

    producto && arreglo.push(producto);
  }

  return arreglo;
}

async function getDestacados(){
  await conectDB();
  const productos = await Product.aggregate([
    {$match: {destacado:true}},
    {$sample:{size:14}}
  ]);
  return productos;
};

async function getBanners(){
  await conectDB();
  const banners = await Banner.findOne();
  return [banners];
};

export default async function Home() {
  const banners = await getBanners();

  const destacados = await getDestacados();
  const ofertas = await getOfertas();
  const masBuscados = await getMasBuscados();
  
  return (

    <div className="flex w-full flex-col border-l-2 border-gray-400">
    <section id="novedades" className="bg-gray-300 h-auto w-auto">
      {banners.map(banner => (
        <Link key={banner._id} href={`/productos/search/${banner.direccion}`}>
          <Image 
          className="object-cover cursor-pointer"
          src={banner.url}
          alt = {banner.titulo}
          width={1920}
          height={1080}
        />
        </Link>
      ))}
    </section>
      <div className="overflow-hidden w-full">
        <h2 className="text-2xl ml-4 mt-4">Productos Destacados</h2>
        <div className="animate-scroll flex whitespace-nowrap">
          <Carrucel productos={destacados} id={'destacados'}/>
        </div>
      </div>
      <div className="overflow-hidden w-full">
        <h2 className="text-2xl ml-4 mt-4">Productos Mas buscados</h2>
        <div className="animate-scroll flex whitespace-nowrap">
          <Carrucel productos={masBuscados} id={'masBuscados'}/>
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

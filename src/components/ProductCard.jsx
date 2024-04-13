
import React from 'react';
import '@/app/productos/style.css'
import Link from 'next/link';
import comprobarurl from '@/utils/comprobarURLImage';
import Image from 'next/image';

const IMAGEN_URL = process.env.IMAGEN_URL;

export const ProductCard = async({producto}) => {
    const {_id,descripcion,marca,stock,precio_venta,unidad,oferta,precioOferta,web} = producto;
    const url = await comprobarurl(`${IMAGEN_URL}${_id}`,`${IMAGEN_URL}Generica`);

  if (web) {
    return (
            <Link href={'/productos/'+_id}>
                <div id='productCard' className='cursor-pointer flex flex-col border border-black rounded-sm w-72'>
                    <div id='productImage' className='relative w-full h-1/2'>
                        <Image className='absolute object-contain inset-0 w-full h-full' width={500} height={100} src={url} alt={_id} />
                        <span className='absolute bottom-2 right-2 bg-gray-400 rounded-lg p-1 text-sm'>{marca}</span>
                    </div>
                    <div>
                        <p className='text-center font-light'>{_id}</p>
                        <h4 className='text-center font-bold text-2xl whitespace-normal'>{descripcion}</h4>
                    </div>

                    <p className='text-center mt-auto'>Venta Por {unidad === 'M' ? 'Metro' : 'Unidad'}</p>

                    <div className='flex justify-between mt-auto'>
                        <p className='text-xl'>Stock: {stock}</p>
                        <div>
                            {oferta && <p id='precioOferta' className='texl-2xl'>{precioOferta?.toFixed(2)}</p>}
                            <p className={`${oferta ? 'line-through' : 'text-xl'}` }>${typeof precio_venta === "number" ? Math.round(precio_venta + precio_venta * 6 / 100).toFixed(2) : '0.00'}</p>
                            
                        </div>
                    </div>

                </div>
            </Link>
    )
  }else{
    return  null;
  }
}

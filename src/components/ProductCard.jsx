
import React from 'react';
import '@/app/productos/style.css'
import Link from 'next/link';

export const ProductCard = ({_doc}) => {
    const {_id,descripcion,marca,stock,precio_venta,unidad,oferta,precioOferta} = _doc;
  return (
        <Link href={'/productos/'+_id}>
            <div id='productCard' className='cursor-pointer flex flex-col border border-black rounded-sm'>
                <div id='productImage' className='relative w-full h-1/2'>
                    <img className='absolute object-cover inset-0 w-full h-full' src={`http://192.168.0.101:4000/api/productos/${_id}/image`} alt={_id} />
                    <span className='absolute bottom-2 right-2 bg-gray-400 rounded-lg p-1 text-sm'>{marca}</span>
                </div>
                <div>
                    <p className='text-center font-light'>{_id}</p>
                    <h4 className='text-center font-bold text-2xl'>{descripcion}</h4>
                </div>

                <p className='text-center mt-auto'>Venta Por {unidad === 'M' ? 'Metro' : 'Unidad'}</p>

                <div className='flex justify-between mt-auto'>
                    <p className='text-xl'>Stock: {stock}</p>
                    <div>
                        {oferta && <p id='precioOferta' className='texl-2xl'>{precioOferta?.toFixed(2)}</p>}
                        <p className={`${oferta ? 'line-through' : 'text-xl'}` }>${typeof precio_venta === "number" ? precio_venta.toFixed(2) : '0.00'}</p>
                        
                    </div>
                </div>

            </div>
        </Link>
  )
}

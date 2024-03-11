import React from 'react'

export const ProductCard = ({_doc}) => {
    const {_id,descripcion,marca,stock,precio_venta} = _doc;
  return (
    <div className='cursor-pointer'>
        <div className='relative w-full h-72 '>
            <img className='absolute object-cover inset-0 w-full h-full' src={`http://192.168.0.101:4000/api/productos/${_id}/image`} alt={_id} />
            <span className='absolute bottom-2 right-2 bg-gray-400 rounded-lg p-1 text-sm'>{marca}</span>
        </div>
        <div>
            <p className='text-center font-light'>{_id}</p>
            <h4 className='text-center font-bold'>{descripcion}</h4>
        </div>
        <div className='flex justify-between'>
            <p>Stock: {stock}</p>
            <p>${precio_venta.toFixed(2)}</p>
        </div>

    </div>
  )
}

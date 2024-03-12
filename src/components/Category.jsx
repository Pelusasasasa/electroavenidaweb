import React from 'react'

export const Category = ({_doc}) => {
    const {nombre} = _doc;
  return (
    <li className='flex flex-col justify-around'>
        <h5>{nombre}</h5>

    </li>
  )
}

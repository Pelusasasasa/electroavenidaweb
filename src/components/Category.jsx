'use client'

import Link from "next/link";
import { useState } from "react";

export const Category = ({datos}) => {
    const {nombre,subRubros,codigo} = JSON.parse(datos);

    const [prueba, setPrueba] = useState(false)

    function handleSubRubros(){
      setPrueba(!prueba)
    };

    const cssConBg = 'flex p-2 bg-green-300 cursor-pointer'
    const cssSinBg = 'flex p-2 cursor-pointer hover:bg-gray-300'

  return (
    <li className='flex flex-col w-full p-2 '>
        <div onClick={handleSubRubros} className={prueba  ? cssConBg : cssSinBg}>
          <h5 className='self-center font-bold text-lm'>{nombre}</h5>
          {
            subRubros && 
            <svg xmlns="http://www.w3.org/2000/svg" className="self-center w-6 h-6 ml-auto" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          }
        </div>

        <ul className={!prueba ? 'hidden' : 'mt-3'}>
          {subRubros?.map( elem => {
            return (
              <Link key={elem} href={`/productos/category/${codigo}/${elem}`}>
                <li className="text-sm hover:bg-gray-300 cursor-pointer my-2 p-2">{elem}</li> 
              </Link>
            )
          })}
        </ul>

    </li>
  )
}

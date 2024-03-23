'use client'

import { useState } from "react"

export const Aviso = ({aviso}) => {

  const [mostrar, setMostrar] = useState(true);

  const closeAviso = () => {
    setMostrar(false);
  }

  return (
    <div className={`text-center bg-red-700 text-white flex ${!mostrar && 'hidden'}`}>
        <p className="flex-1">{aviso}</p>
        <svg onClick={closeAviso} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
    </div>
  )
}

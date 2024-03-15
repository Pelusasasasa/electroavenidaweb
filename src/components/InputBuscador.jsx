'use client'

import { useState } from "react"

export const InputBuscador = () => {

  const [prueba, setprueba] = useState('');

  function handleInput(e){
    setprueba(e.target.value)
  }

  return (
    <input
        onChange={handleInput}
        type="text"
        className="align-middle w-96 border rounded-lg bg-slate-300 border-black text-black pl-2"
        placeholder="Que estas Buscando?"
    />
  )
}

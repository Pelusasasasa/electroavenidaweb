'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";

export function InputBuscador(){
  const router = useRouter()
  const [prueba, setprueba] = useState('');

  function handleInput(e){
    setprueba(e.target.value)
  };

  function handlekey(e){
    if(e.key === 'Enter'){
      e.target.blur();
      router.push(`/productos/search/${prueba}`)
    }
  }

  return (
    <input
        onChange={handleInput}
        onKeyPress={handlekey}
        type="text"
        className="align-middle w-96 border rounded-lg bg-slate-300 border-black text-black pl-2"
        placeholder="Que estas Buscando?"
    />
  )
}

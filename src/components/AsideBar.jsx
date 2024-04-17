import loadCategorias from '@/helpres/getCategories';
import React, { Suspense } from 'react';
import { Category } from './Category';

export default async function AsideBar(){

    const categorias = await loadCategorias();

  return (
    <aside className="w-fit bg-yellow-200 pl-2 pr-2">
           <h4 className="font-bold text-2xl ">Categorias</h4>
           <ul className="list-none gap-5 flex flex-col mt-5 justify-around">
            {
            categorias.map( category => (
                <Suspense key={category._id}>
                  <Category datos={JSON.stringify(category)}/>
                </Suspense>
            ))
            }
        </ul>
    </aside>
  )
}

'use client'

// import login from '@/api/login';
import '@/app/login/style.css';
import { useState } from 'react';

const IMAGEN_URL = process.env.IMAGEN_URL;

export default function page(){

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    function handleSubmit (e){
        e.preventDefault();
    }

  return (
    <form id='login' className='flex flex-col items-center w-full container pb-20' onSubmit={handleSubmit}>

            <main className='mt-2 self-end  border-b-customGray border-b-8 border-l-customGray border-l-8'>

                <div className='flex flex-col justify-between gap-2 relative overflow-visible'>
                    <h3 className='text-center text-3xl text-white mt-4'>Bienvendios</h3>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="bg-white rounded-full pt-2 self-center relative top-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                </div>


                <div className='flex flex-col mt-14 gap-5'>
                    <input type="email" name="email" id="email" value={email} placeholder='E-mail' className='self-center text-xl' onChange={(e) => setEmail(e.target.value)}/>
                    <input type="password" name="password" id="password" placeholder='Password' className='self-center text-xl' value={password} onChange={(e) => setPassword(e.target.value)}/>

                    <button type='submit' className='text-customGray text-3xl font-bold self-center px-4 py-2'>Iniciar Sesion</button>
                    
                    <div className='self-center flex gap-2'>
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="" className='text-customGray'>Recordarme</label>
                    </div>
                    <p className='text-center m-0 text-customGray font-2xl'>¿Olvido su contraseña?</p>
                </div>
                
            </main>

    </form>
  )
}

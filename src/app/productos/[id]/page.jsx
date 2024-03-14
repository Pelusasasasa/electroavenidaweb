import { useRouter } from "next/navigation";
import { conectDB } from "@/utils/mongoose";
import Product from "@/models/Product";

async function getProduct(id){
    await conectDB();
    const product = await Product.findOne({_id:id});
    return product;
}

export default async function page({params}){
    // const router = useRouter();
    const id = params.id;
    const {_id,descripcion,marca,cod_fabrica,stock} = await getProduct(id);

  return (
    <section className="flex border-l-2 border-gray-400 pl-4">
        <div className=" flex flex-col">
            
            <div className="flex align-middle justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 self-center cursor-pointer hover:scale-125">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>

                <img className="w-96" src="http://192.168.0.101:4000/api/productos/127-033/image" alt="" />

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 self-center cursor-pointer hover:scale-125">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>

            </div>
            <div className="flex">
                <img className="w-32" src="http://192.168.0.101:4000/api/productos/127-033/image" alt="" />
                <img className="w-32" src="http://192.168.0.101:4000/api/productos/127-033/image" alt="" />
                <img className="w-32" src="http://192.168.0.101:4000/api/productos/127-033/image" alt="" />
            </div>
        </div>
    </section>
  )
}

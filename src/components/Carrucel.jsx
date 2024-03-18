import '@/app/style.css';
import { ProductCard } from './ProductCard';

export const Carrucel = ({texto,productos,id}) => {
  return (
    <section id={id} className='w-[400px] flex-shrink-0'>
          <main className="flex gap-2 ml-2 whitespace-nowrap">
            {productos.map(producto => (
              <ProductCard key={producto._id} producto={producto}/>
            ))}
        </main>
    </section>
  )
}

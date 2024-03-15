import '@/app/contacto/style.css'

export default function page(){
  return (
    <div id="contacto" className="w-full">
      <h1 className="text-center mt-2 text-2xl text-">Contacto</h1>
      <section className="flex gap-2 justify-around mt-10">
        <div className="border-r-2 border-gray-500 h-screen flex flex-col gap-32 pr-5">
          <p className="text-2xl">Direccion: 9 de  Julio 3380</p>
          <p className="text-2xl">Chajari - Entre Rios - Argentina</p>
        </div>
        <div className="border-r-2 border-gray-500 h-screen flex flex-col align-middle gap-32 pr-5">
          <p className="text-2xl">Telefono: 3456 421421</p>
          <p className="text-2xl">WhatsApp: 3456 478657</p>
        </div>
        <div className="h-screen flex flex-col gap-32">
          <p className="text-2xl">mail: electroavenidachajari@gmail.com</p>
        </div>
      </section>
    </div>
  )
}

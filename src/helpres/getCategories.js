import { conectDB } from "@/utils/mongoose";
import Rubro from "@/models/Category";

export default async function loadCategorias() {
    await conectDB();
    const categorias = await Rubro.find();

    categorias.sort((a, b) => {
        if (a.nombre > b.nombre) {
            return 1;
        }else if(a.nombre < b.nombre){
            return -1;
        };
        return 0;
      });

    return categorias;
};

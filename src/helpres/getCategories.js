import { conectDB } from "@/utils/mongoose";
import Rubro from "@/models/Category";

export default async function loadCategorias() {
    await conectDB();
    const categorias = await Rubro.find();
    return categorias;
};

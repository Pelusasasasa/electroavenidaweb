import { NextResponse } from "next/server";
import { conectDB } from "@/utils/mongoose";
import Producto from "@/models/Product";



export async function GET(){
    conectDB();

    const productos = await Producto.find();
    return NextResponse.json(productos)
}
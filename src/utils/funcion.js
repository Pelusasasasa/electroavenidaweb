export function obtenerFechaHoraBuenosAires() {
    const now = new Date();
    const nuevaFecha = new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString();
    console.log(nuevaFecha)
    return nuevaFecha;
};
export default function comprobarurl(url,urlAux) {
    return fetch(url,{method: 'HEAD'})
        .then((response) => {
            if(response.ok){
                return url;
            }else{
                return urlAux;
            }
        })
        .catch(() => {
            return urlAux;
        });
}
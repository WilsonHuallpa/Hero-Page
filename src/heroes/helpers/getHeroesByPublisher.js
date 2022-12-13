import { heroes } from "../data/heroes";

//Crear una funcion que filtra los publisher, me regresa un array deseado. 

export const getHeroesByPublisher = ( publisher ) => {
    const validPublisher = ['DC Comics', 'Marvel Comics'];
    if( !validPublisher.includes( publisher )){
        throw new Error(`El ${publisher} no se encuentra en la base de datos.`);
    }
    return heroes.filter( heroe => heroe.publisher === publisher );
}
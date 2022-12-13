import { heroes } from "../data/heroes";

export const getHeroesByName = ( name = '' ) => {

    //Eliminamos lo espacios en blanco de los costados,
    name = name.toLocaleLowerCase().trim();

    //No recibimos nada en nombre, retornamos un arreglo vacio.
    if( name.length === 0) return [];

   return heroes.filter(
        hero => hero.superhero.toLocaleLowerCase().includes( name )
    );

}
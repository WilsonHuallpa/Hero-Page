import { heroes } from "../data/heroes"

export const getHeroById = ( id ) => {
    //Find Si existe lo regresa, no existe regresa ondefine.
    return heroes.find( hero => hero.id === id);
}
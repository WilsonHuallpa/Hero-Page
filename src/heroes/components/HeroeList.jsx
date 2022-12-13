import { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers"
import { HeroCard } from "./HeroCard";


export const HeroeList = ({ publisher }) => {
    const heroeList = useMemo(() => getHeroesByPublisher( publisher ), [publisher]); 
  return (
    <div className="row row-cols-1 row-cols-md-3 g-3">
        {
            heroeList.map((heroe) => (
              <HeroCard 
                key={ heroe.id }
                { ...heroe }
                />
            ))
        }
    </div>
  )
}

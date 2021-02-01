import React, { useMemo } from "react";
import { getHeroesByPublisher } from "../../selectors/getHeroesByPublisher";
import { HeroCard } from "./HeroCard";

export const HeroList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <div className="card-columns">
      {heroes.map((hero) => (
        <HeroCard
          key={hero.id}
          id={hero.id}
          superheroe={hero.superhero}
          publisher={hero.publisher}
          alter_ego={hero.alter_ego}
          first_appearance={hero.first_appearance}
          characters={hero.characters}
        />
      ))}
    </div>
  );
};

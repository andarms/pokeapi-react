import "./PokedexSearch.css";

import React, { useState } from "react";
import { useForm } from "react-hook-form";

export function PokedexSearch() {
  const [pokemonImage, setPokemonImage] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const pokemon = await fectchPokemonData(data.pokemon);
    setPokemonImage(pokemon.sprites.front_default);
    console.log(pokemonImage);
  };

  return (
    <div className="PokedexSearch">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="First name"
          {...register("pokemon", { required: true, maxLength: 80 })}
        />
        <button type="submit">Search </button>
      </form>
      <img src={pokemonImage} alt="" />
    </div>
  );
}

async function fectchPokemonData(pokemon) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  const data = await res.json();
  return data;
}

import { Injectable } from '@angular/core';
import PokeAPI from 'pokeapi-typescript';
import { IPokemon } from 'pokeapi-typescript/dist/interfaces/Pokemon/Pokemon';
import { PokemonListStoreService } from '../../stores/pokemon-list/pokemon-list-store.service';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private pokemonListStoreService: PokemonListStoreService) {}

  getByName(pokemonName: IPokemon['name']): Promise<IPokemon> {
    return PokeAPI.Pokemon.resolve(pokemonName);
  }

  getAllFilteredByName(pokemonName?: IPokemon['name']) {
    PokeAPI.Pokemon.listAll().then((data) => {
      this.pokemonListStoreService.updateAll(
        pokemonName
          ? data.results.filter((pokemon) => pokemon.name.includes(pokemonName))
          : data.results
      );
    });
  }

  getAll() {
    PokeAPI.Pokemon.listAll().then((data) => {
      this.pokemonListStoreService.updateAll(data.results);
    });
  }
}

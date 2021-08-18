import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IPokemon } from 'pokeapi-typescript/dist/interfaces/Pokemon/Pokemon';
import { INamedApiResource } from 'pokeapi-typescript/dist/interfaces/Utility/NamedApiResourceList';

@Injectable({
  providedIn: 'root',
})
export class PokemonListStoreService {
  private readonly _Pokemon = new BehaviorSubject<
    Array<INamedApiResource<IPokemon>>
  >([]);
  readonly Pokemon$ = this._Pokemon.asObservable();

  constructor() {}

  private get Pokemon(): Array<INamedApiResource<IPokemon>> {
    return this._Pokemon.getValue();
  }

  private set Pokemon(val: Array<INamedApiResource<IPokemon>>) {
    this._Pokemon.next(val);
  }

  updateAll(pokemon: Array<INamedApiResource<IPokemon>>) {
    this.Pokemon = [...pokemon];
  }
}

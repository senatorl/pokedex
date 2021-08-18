import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IPokemon } from 'pokeapi-typescript/dist/interfaces/Pokemon/Pokemon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { map } from 'rxjs/operators';

interface pokemonLocalStorage {
  caught: Array<IPokemon['name']>;
  wish: Array<IPokemon['name']>;
}

@Injectable({
  providedIn: 'root',
})
export class PokemonLocalStorageService {
  private localStorageKey = 'pokemonLocalStorage';
  private pokemonLocalStorage: pokemonLocalStorage = JSON.parse(
    localStorage.getItem(this.localStorageKey) as string
  );
  private readonly _PokemonNames = new BehaviorSubject<pokemonLocalStorage>(
    this.pokemonLocalStorage || { caught: [], wish: [] }
  );
  readonly caughtList$ = this._PokemonNames.pipe(map((x) => x.caught));
  readonly wishList$ = this._PokemonNames.pipe(map((x) => x.wish));

  constructor(private snackBar: MatSnackBar) {}

  private get PokemonNames(): pokemonLocalStorage {
    return this._PokemonNames.getValue();
  }

  private set PokemonNames(val: pokemonLocalStorage) {
    const json = JSON.stringify(val);
    localStorage.setItem(this.localStorageKey, json);
    this._PokemonNames.next(val);
  }

  isOnTheList(
    pokemonName: IPokemon['name'],
    key: keyof pokemonLocalStorage
  ): boolean {
    return this.PokemonNames[key].includes(pokemonName);
  }

  addOne(pokemonName: IPokemon['name'], key: keyof pokemonLocalStorage) {
    this.snackBar.open('Pokemon has been added!');
    this.PokemonNames[key] = this.PokemonNames[key].includes(pokemonName)
      ? this.PokemonNames[key]
      : [...this.PokemonNames[key], pokemonName];
    this.PokemonNames = this.PokemonNames;
  }

  removeOne(pokemonName: IPokemon['name'], key: keyof pokemonLocalStorage) {
    this.snackBar.open('Pokemon has been removed!');
    this.PokemonNames[key] = this.PokemonNames[key].filter(
      (p) => p !== pokemonName
    );
    this.PokemonNames = this.PokemonNames;
  }
}

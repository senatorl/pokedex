import { Component, Input, OnInit } from '@angular/core';
import { IPokemon } from 'pokeapi-typescript/dist/interfaces/Pokemon/Pokemon';
import { PokemonLocalStorageService } from '../../../stores/pokemon-local-storage.service';

@Component({
  selector: 'app-pokemon-actions',
  templateUrl: './pokemon-actions.component.html',
  styleUrls: ['./pokemon-actions.component.scss'],
})
export class PokemonActionsComponent implements OnInit {
  @Input() pokemonName: IPokemon['name'] | undefined;

  constructor(
    public pokemonLocalStorageListService: PokemonLocalStorageService
  ) {}

  ngOnInit(): void {}

  addToWishList(name: IPokemon['name']): void {
    this.pokemonLocalStorageListService.addOne(name, 'wish');
  }

  removeFromWishList(name: IPokemon['name']): void {
    this.pokemonLocalStorageListService.removeOne(name, 'wish');
  }

  wishButtonClicked(name: IPokemon['name']): void {
    this.isOnWishList(name)
      ? this.removeFromWishList(name)
      : this.addToWishList(name);
  }

  isOnWishList(name: IPokemon['name']): boolean {
    return this.pokemonLocalStorageListService.isOnTheList(name, 'wish');
  }

  addToCaughtList(name: IPokemon['name']): void {
    this.pokemonLocalStorageListService.addOne(name, 'caught');
  }

  removeFromCaughtList(name: IPokemon['name']): void {
    this.pokemonLocalStorageListService.removeOne(name, 'caught');
  }

  caughtButtonClicked(name: IPokemon['name']): void {
    this.isOnCaughtList(name)
      ? this.removeFromCaughtList(name)
      : this.addToCaughtList(name);
  }

  isOnCaughtList(name: IPokemon['name']): boolean {
    return this.pokemonLocalStorageListService.isOnTheList(name, 'caught');
  }
}

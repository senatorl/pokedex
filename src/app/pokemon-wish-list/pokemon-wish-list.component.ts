import { Component, OnInit } from '@angular/core';
import { PokemonLocalStorageService } from '../stores/pokemon-local-storage.service';

@Component({
  selector: 'app-pokemon-wish-list',
  templateUrl: './pokemon-wish-list.component.html',
  styleUrls: ['./pokemon-wish-list.component.scss'],
})
export class PokemonWishListComponent implements OnInit {
  constructor(
    public pokemonLocalStorageListService: PokemonLocalStorageService
  ) {}
  ngOnInit(): void {}
}

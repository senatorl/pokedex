import { Component, OnInit } from '@angular/core';

import { PokemonLocalStorageService } from '../stores/pokemon-local-storage.service';

@Component({
  selector: 'app-pokemon-caught-list',
  templateUrl: './pokemon-caught-list.component.html',
  styleUrls: ['./pokemon-caught-list.component.scss'],
})
export class PokemonCaughtListComponent implements OnInit {
  constructor(
    public pokemonLocalStorageListService: PokemonLocalStorageService
  ) {}

  ngOnInit(): void {}
}

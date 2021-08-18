import { Component, Input, OnInit } from '@angular/core';
import { IPokemon } from 'pokeapi-typescript/dist/interfaces/Pokemon/Pokemon';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.scss'],
})
export class PokemonItemComponent implements OnInit {
  @Input() pokemonName: IPokemon['name'] | undefined;
  constructor() {}

  ngOnInit(): void {}
}

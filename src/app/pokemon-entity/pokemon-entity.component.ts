import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPokemon } from 'pokeapi-typescript/dist/interfaces/Pokemon/Pokemon';

@Component({
  selector: 'app-pokemon-entity',
  templateUrl: './pokemon-entity.component.html',
  styleUrls: ['./pokemon-entity.component.scss'],
})
export class PokemonEntityComponent implements OnInit {
  public pokemon: IPokemon | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.pokemon = this.route.snapshot.data.pokemon;
    console.log(this.pokemon, this.route);
  }
}

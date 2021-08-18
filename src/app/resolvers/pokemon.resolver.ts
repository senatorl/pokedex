import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, from } from 'rxjs';
import { PokemonService } from '../resources/pokemon/pokemon.service';
import { IPokemon } from 'pokeapi-typescript/dist/interfaces/Pokemon/Pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonResolver implements Resolve<IPokemon> {
  constructor(private pokemonService: PokemonService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<IPokemon> {
    return from(this.pokemonService.getByName(route?.params?.name));
  }
}

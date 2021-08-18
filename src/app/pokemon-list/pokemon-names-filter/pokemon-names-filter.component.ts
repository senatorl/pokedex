import { Component, OnDestroy, OnInit } from '@angular/core';
import { IPokemon } from 'pokeapi-typescript/dist/interfaces/Pokemon/Pokemon';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { PokemonService } from '../../resources/pokemon/pokemon.service';

@Component({
  selector: 'app-pokemon-names-filter',
  templateUrl: './pokemon-names-filter.component.html',
  styleUrls: ['./pokemon-names-filter.component.scss'],
})
export class PokemonNamesFilterComponent implements OnInit, OnDestroy {
  public name: IPokemon['name'] | undefined;
  public nameChanged: Subject<IPokemon['name']> = new Subject<
    IPokemon['name']
  >();
  private name$: Subscription | undefined;

  constructor(private PokemonService: PokemonService) {}

  ngOnInit(): void {
    this.name$ = this.nameChanged
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe((newName) => {
        this.PokemonService.getAllFilteredByName(newName.toLowerCase());
      });
  }

  clearFilter() {
    this.PokemonService.getAllFilteredByName();
  }

  ngOnDestroy(): void {
    this.name$?.unsubscribe();
  }
}

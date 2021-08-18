import { Component, HostListener, OnInit } from '@angular/core';
import { PokemonService } from '../../resources/pokemon/pokemon.service';
import { PokemonListStoreService } from '../../stores/pokemon-list/pokemon-list-store.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-pokemon-paginated-list',
  templateUrl: './pokemon-paginated-list.component.html',
  styleUrls: ['./pokemon-paginated-list.component.scss'],
})
export class PokemonPaginatedListComponent implements OnInit {
  public pageSize = 12;
  public sliceStart = 0;
  public sliceEnd = this.pageSize;
  public gridCols = 3;

  @HostListener('window:resize', ['$event'])
  onResize(event: UIEvent) {
    const target = event.target as Window;
    this.setGridCols(target.screen.width);
  }

  constructor(
    public pokemonService: PokemonService,
    public pokemonListStoreService: PokemonListStoreService
  ) {}

  setGridCols(screenWidth: number) {
    this.gridCols = screenWidth < 1000 ? 1 : 3;
  }

  ngOnInit(): void {
    this.setGridCols(window.screen.width);
    this.pokemonService.getAllFilteredByName();
  }

  updatePagination(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.sliceStart = event.pageIndex * event.pageSize;
    this.sliceEnd = (event.pageIndex + 1) * event.pageSize;
  }
}

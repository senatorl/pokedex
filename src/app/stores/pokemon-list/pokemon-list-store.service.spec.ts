import { TestBed } from '@angular/core/testing';

import { PokemonListStoreService } from './pokemon-list-store.service';

describe('PokemonListStoreService', () => {
  let service: PokemonListStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonListStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

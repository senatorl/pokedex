import { TestBed } from '@angular/core/testing';

import { PokemonLocalStorageService } from './pokemon-local-storage.service';

describe('PokemonFavListService', () => {
  let service: PokemonLocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonLocalStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

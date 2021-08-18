import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonPaginatedListComponent } from './pokemon-paginated-list.component';

describe('PokemonPaginatedListComponent', () => {
  let component: PokemonPaginatedListComponent;
  let fixture: ComponentFixture<PokemonPaginatedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonPaginatedListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonPaginatedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

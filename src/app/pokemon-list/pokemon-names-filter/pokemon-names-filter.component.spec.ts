import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonNamesFilterComponent } from './pokemon-names-filter.component';

describe('PokemonNamesFilterComponent', () => {
  let component: PokemonNamesFilterComponent;
  let fixture: ComponentFixture<PokemonNamesFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonNamesFilterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonNamesFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonEntityComponent } from './pokemon-entity.component';

describe('PokemonEntityComponent', () => {
  let component: PokemonEntityComponent;
  let fixture: ComponentFixture<PokemonEntityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonEntityComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

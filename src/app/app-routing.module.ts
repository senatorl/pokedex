import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonEntityComponent } from './pokemon-entity/pokemon-entity.component';
import { PokemonResolver } from './resolvers/pokemon.resolver';
import { PokemonWishListComponent } from './pokemon-wish-list/pokemon-wish-list.component';
import { PokemonCaughtListComponent } from './pokemon-caught-list/pokemon-caught-list.component';

const routes: Routes = [
  {
    path: 'pokemon-list',
    component: PokemonListComponent,
  },
  { path: 'pokemon-wish-list', component: PokemonWishListComponent },
  { path: 'pokemon-caught-list', component: PokemonCaughtListComponent },
  {
    path: 'pokemon/:name',
    component: PokemonEntityComponent,
    resolve: {
      pokemon: PokemonResolver,
    },
  },
  { path: '**', component: PokemonListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

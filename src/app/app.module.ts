import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { PokemonItemComponent } from './common/components/pokemon-item/pokemon-item.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { PokemonNamesFilterComponent } from './pokemon-list/pokemon-names-filter/pokemon-names-filter.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PokemonEntityComponent } from './pokemon-entity/pokemon-entity.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PokemonCaughtListComponent } from './pokemon-caught-list/pokemon-caught-list.component';
import { PokemonWishListComponent } from './pokemon-wish-list/pokemon-wish-list.component';
import { PokemonPaginatedListComponent } from './pokemon-list/pokemon-paginated-list/pokemon-paginated-list.component';
import { PokemonActionsComponent } from './common/components/pokemon-actions/pokemon-actions.component';
import {
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
  MatSnackBarModule,
} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    PokemonItemComponent,
    PokemonListComponent,
    PokemonNamesFilterComponent,
    PokemonEntityComponent,
    PokemonCaughtListComponent,
    PokemonWishListComponent,
    PokemonPaginatedListComponent,
    PokemonActionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule,
    MatCardModule,
    MatDividerModule,
    MatGridListModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    MatTooltipModule,
    MatSnackBarModule,
  ],
  providers: [
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: {
        duration: 1500,
        horizontalPosition: 'center',
        verticalPosition: 'top',
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { IngredientsListComponent } from './ingredients-list/ingredients-list.component';
import { MealsListComponent } from './meals-list/meals-list.component';
import { RecipeSearchPageComponent } from './recipe-search-page/recipe-search-page.component';
import { RecipeSearchResultsListComponent } from './recipe-search-results-list/recipe-search-results-list.component';
import { ShoppingListPageComponent } from './shopping-list-page/shopping-list-page.component';
import { AddIngredientPageComponent } from './add-ingredient-page/add-ingredient-page.component';
import { SmallXComponent } from './small-x/small-x.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    IngredientsListComponent,
    MealsListComponent,
    RecipeSearchPageComponent,
    RecipeSearchResultsListComponent,
    ShoppingListPageComponent,
    AddIngredientPageComponent,
    SmallXComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { Component, OnInit } from '@angular/core';
import { IngredientsService } from '../ingredients.service';
import { MealsService } from './../meals.service';
import { Ingredient, Meal } from '../types';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  isLoadingMeals = true;
  meals: Meal[] = [];

  isLoadingIngredients = true;
  ingredients: Ingredient[] = [];

  constructor(
    private mealsService: MealsService,
    private ingredientService: IngredientsService
  ) {}

  ngOnInit(): void {
    this.mealsService.getMeals().subscribe((meals) => {
      this.meals = meals;
      this.isLoadingMeals = false;
    });
    this.ingredientService.getIngredients().subscribe((ingredients) => {
      this.ingredients = ingredients;
      this.isLoadingIngredients = false;
    });
  }

  onDeleteMeal(mealId: string) {
    this.mealsService
      .deleteMeal(mealId)
      .subscribe((updatedMeals) => (this.meals = updatedMeals));
  }

  onDeleteIngredient(ingredientName: string) {
    this.ingredientService
      .deleteIngredient(ingredientName)
      .subscribe(
        (updatedIngredients) => (this.ingredients = updatedIngredients)
      );
  }
}

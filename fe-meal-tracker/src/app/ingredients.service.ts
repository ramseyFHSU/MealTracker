import { Ingredient } from './types';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IngredientsService {
  constructor(private http: HttpClient) {}

  getIngredients(): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>('/api/ingredients');
  }
  deleteIngredient(name: string): Observable<Ingredient[]> {
    return this.http.delete<Ingredient[]>(`/api/ingredients/${name}`);
  }
}

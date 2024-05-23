import { Component, OnInit } from '@angular/core';
import { RecipeItemComponent } from '../../recipe-list/recipe-item/recipe-item.component';
import { Recipe } from '../../models/recipe/recipe';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [RecipeItemComponent],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.scss',
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    {
      name: 'Burger',
      description: 'this is recipe',
      imagePath:
        'https://soliloquywp.com/wp-content/uploads/2018/11/nb_ist_cover.jpg',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    return;
  }
}

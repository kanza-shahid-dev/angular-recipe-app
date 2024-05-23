import { Component, OnInit } from '@angular/core';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { Ingredients } from '../models/ingredients/ingredients';

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [ShoppingEditComponent],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.scss',
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredients[] = [
    {
      name: 'Tomato',
      amount: 5,
    },
    {
      name: 'Onions',
      amount: 2,
    },
  ];
  constructor() {}
  ngOnInit(): void {
    return;
  }
}

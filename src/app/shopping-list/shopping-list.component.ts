import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';
import { I18NHtmlParser } from '@angular/compiler/src/i18n/i18n_html_parser';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredients[] = [
    new Ingredients ('Apple',5),
    new Ingredients ('Tomato', 10)
  ];
  constructor() { }

  ngOnInit() {
  }

}

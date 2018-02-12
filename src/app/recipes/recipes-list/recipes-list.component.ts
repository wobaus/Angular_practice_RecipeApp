import { Component, OnInit } from '@angular/core';
import { Recipe } from  '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipee', 'This is simply a test', 'https://www.google.com/imgres?imgurl=http%3A%2F%2Fcdn-image.myrecipes.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2F1506120378%2FMR_0917170472.jpg%3Fitok%3DKPTNrvis&imgrefurl=http%3A%2F%2Fwww.myrecipes.com%2Frecipe%2Flemony-chicken-and-spinach-soup&docid=frbyewjXQOHF-M&tbnid=W98drh1pADRaLM%3A&vet=10ahUKEwjZ-MOY_KDZAhUUUGMKHTPoD8YQMwikAigAMAA..i&w=1200&h=900&client=firefox-b-ab&bih=585&biw=1040&q=recipe&ved=0ahUKEwjZ-MOY_KDZAhUUUGMKHTPoD8YQMwikAigAMAA&iact=mrc&uact=8')
  ];

  constructor() { }

  ngOnInit() {
  }

}

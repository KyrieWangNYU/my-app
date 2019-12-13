import { Component, OnInit } from '@angular/core';
import { Dish } from '../../shared/dish.model';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  found = false;
  dishName: string;
  ingredient : string;
  empty = true;
  check1 = false;
  check2 = false;

  dishes : Dish[] = [new Dish('tomato', 'egg', 'TomatoEgg'),
                     new Dish('spicy', 'meat', 'SpicyMeat')];
  added : string[] = [];

  add() {
    this.added.push(this.ingredient);
    this.ingredient = null;
    this.empty = false;
  }
  check(){
    if (this.added.length > 2){
      this.found = true;
      this.empty = false;
      this.dishName = "Please limit number of ingredients to 2";
      return;
    }
    for (let i = 0; i < this.dishes.length; i++){
      if ((this.added[0] === this.dishes[i].first && this.added[1] === this.dishes[i].second) ||
        (this.added[0] === this.dishes[i].second && this.added[1] === this.dishes[i].first)){
        this.dishName = this.dishes[i].result;
        this.found = true;
        this.empty = false;
        return;
      }
    }

    if (!this.found){
      this.found = true;
      this.empty = false;
      this.dishName = "none";
    }
  }

  reset(){
    this.found = false;
    this.empty = true;
    this.ingredient = null;
    this.added = [];
  }
  constructor() { }

  ngOnInit() {
  }

}

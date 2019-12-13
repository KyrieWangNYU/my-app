import { Component, OnInit } from '@angular/core';
import { Dish } from '../../shared/dish.model';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  found = false;
  dishName: string;
  ingredient : string;

  dishes : Dish[] = [new Dish('tomato', 'egg', 'TomatoEgg'),
                     new Dish('spicy', 'meat', 'SpicyMeat')]
  search(){
    for (let i = 0; i < this.dishes.length; i++){
      if (this.ingredient === this.dishes[i].first || this.ingredient === this.dishes[i].second){
        this.dishName = this.dishes[i].result;
        this.found = true;
      }
    }
  }

  reset(){

  }
  constructor() { }

  ngOnInit() {
  }

}

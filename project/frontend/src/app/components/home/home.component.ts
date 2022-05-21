import { Component, OnInit } from '@angular/core';
import {FoodItem, Restaurant} from "../../service/models";
import axios from "axios";
import {Endpoints} from "../../service/endpoints";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  restaurants: Restaurant[] = [];
  foodItems: FoodItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.onRefreshFoodItems();
    this.onRefreshRestaurants();
  }

  onRefreshRestaurants() {
    axios.get(Endpoints.LAST_RESTAURANTS)
      .then(res => {
        this.restaurants = res.data;

        console.log(this.restaurants);
      }).catch(err => {

      });
  }

  onRefreshFoodItems() {
    axios.get(Endpoints.LAST_FOOD)
      .then(res => {
        this.foodItems = res.data;
      }).catch(err => {

    });
  }

}

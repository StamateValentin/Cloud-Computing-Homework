import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RestaurantComponent} from "./components/restaurant/restaurant.component";
import {LoginComponent} from "./components/login/login.component";
import {SignupComponent} from "./components/signup/signup.component";
import {HomeComponent} from "./components/home/home.component";
import { DishComponent } from './components/dish/dish.component';
import { OwnerComponent } from './components/owner/owner.component';
import { BasketComponent } from './components/basket/basket.component';
import { UserComponent } from './components/user/user.component';
import {RestaurantProfileComponent} from "./components/restaurant-profile/restaurant-profile.component";
import {CartComponent} from "./components/cart/cart.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'restaurant', component: RestaurantComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'home', component: HomeComponent},
  {path: 'dish', component: DishComponent},
  {path: 'owner', component: OwnerComponent},
  {path: 'basket', component: BasketComponent},
  {path: 'user', component: UserComponent},
  {path: 'restaurant-profile', component: RestaurantProfileComponent},
  {path: 'cart', component: CartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ProductsComponent } from './products/products.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {
    path: '',
    component : HomeComponent
  },
  {
    path: 'myprofile',
    component : ProfileComponent
  },
  {
    path: 'calendar',
    component : CalendarComponent
  },
  {
    path: 'products',
    component : ProductsComponent
  },
  {
    path: 'settings',
    component : SettingsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }

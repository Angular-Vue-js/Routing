import { ModuleWithProviders }   from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import { AppComponent }          from './app.component';
import { AboutComponent }        from './about';
import { HomeComponent }        from './home';
import { PageDefault }           from './pagedefault';
import { FoodItem } from './foodItem';
import { DetailComponent } from './detail';

const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent },
  { path: ':id', component: DetailComponent },
  { path: '**', component: PageDefault },
  { path: '', redirectTo: '/home', pathMatch: 'full' }

  
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

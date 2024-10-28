import { Routes } from '@angular/router';
import { HomeComponent } from './Components/Pages/home/home.component';
import { AboutComponent } from './Components/Pages/about/about.component';

export const routes: Routes = [
    { path: "", component: HomeComponent},
    { path: "about", component: AboutComponent }
];

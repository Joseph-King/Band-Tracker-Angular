import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ShowsComponent } from './components/shows/shows.component';
import { ArtistsComponent } from './components/artists/artists.component';
import { VenuesComponent } from './components/venues/venues.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ProfileComponent } from './components/profile/profile.component';
import { YourShowsComponent } from './components/your-shows/your-shows.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'shows', component: ShowsComponent},
  {path: 'your-shows', component: YourShowsComponent},
  {path: 'artists', component: ArtistsComponent},
  {path: 'venues', component: VenuesComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'profile', component: ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

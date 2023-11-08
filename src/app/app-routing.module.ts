import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ParkDetailComponent } from './pages/park-detail/park-detail.component';
import { StatePageComponent } from './pages/state-page/state-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'state/:stateCode', component: StatePageComponent },
  { path: 'park-details/:parkCode', component: ParkDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}

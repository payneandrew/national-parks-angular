import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { StatePageComponent } from './pages/state-page/state-page.component';
import { ParkDetailComponent } from './pages/park-detail/park-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    StatePageComponent,
    ParkDetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { Component } from '@angular/core';
import { USStates } from 'src/app/models/states';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent {
  states = Object.entries(USStates).map(([name, abbreviation]) => ({
    name,
    abbreviation,
  }));
}

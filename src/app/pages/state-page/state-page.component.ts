import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParkDetail } from 'src/app/models/parks';
import { USStates } from 'src/app/models/states';
import { NationalParksService } from 'src/app/services/national-parks.service';

@Component({
  selector: 'app-state-page',
  templateUrl: './state-page.component.html',
  styleUrls: ['./state-page.component.css'],
})
export class StatePageComponent implements OnInit {
  parks: ParkDetail[] = [];
  stateCode: USStates = this.route.snapshot.params['stateCode'];

  constructor(
    private route: ActivatedRoute,
    private nationalparkService: NationalParksService
  ) {}

  ngOnInit() {
    this.nationalparkService.getParks(this.stateCode).subscribe((data) => this.parks = data)
  }
}

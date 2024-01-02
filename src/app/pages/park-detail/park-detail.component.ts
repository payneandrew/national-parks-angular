import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParkDetail } from 'src/app/models/parks';
import { NationalParksService } from 'src/app/services/national-parks.service';

@Component({
  selector: 'app-park-detail',
  templateUrl: './park-detail.component.html',
  styleUrls: ['./park-detail.component.css'],
})
export class ParkDetailComponent {
  park = {} as ParkDetail
  parkCode: string = this.route.snapshot.params['parkCode'];

  constructor(
    private route: ActivatedRoute,
    private nationalparkService: NationalParksService
  ) {}

  async ngOnInit() {
    this.nationalparkService.getParkDetail(this.parkCode).subscribe((data) => this.park = data)
  }
}

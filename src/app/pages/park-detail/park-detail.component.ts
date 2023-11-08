import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { ParkDetail, ParkResponse } from 'src/app/models/parks';
import { USStates } from 'src/app/models/states';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-park-detail',
  templateUrl: './park-detail.component.html',
  styleUrls: ['./park-detail.component.css'],
})
export class ParkDetailComponent {
  // TODO: Add model type instead of any
  park = {} as ParkDetail
  parkCode: USStates = this.route.snapshot.params['parkCode'];

  constructor(
    private route: ActivatedRoute,
    // TODO: Refactor into a service so that we don't call HttpClient directly in a component
    private http: HttpClient,
  ) {}

  async ngOnInit() {
    const params = new HttpParams()
      .set('parkCode', this.parkCode)
      .set('api_key', environment.NP_API_KEY);

    const { data } = await firstValueFrom(
      this.http.get<ParkResponse>(`https://developer.nps.gov/api/v1/parks`, {
        params,
      }),
    );

    this.park = data[0]
  }
}

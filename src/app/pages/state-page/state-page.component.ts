import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { ParkDetail, ParkResponse } from 'src/app/models/parks';
import { USStates } from 'src/app/models/states';
import { environment } from 'src/environments/environment';

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
    // TODO: Refactor into a service so that we don't call HttpClient directly in a component
    private http: HttpClient,
  ) {}

  async ngOnInit() {
    const params = new HttpParams()
      .set('stateCode', this.stateCode)
      .set('api_key', environment.NP_API_KEY);

    const { data } = await firstValueFrom(
      this.http.get<ParkResponse>(`https://developer.nps.gov/api/v1/parks`, {
        params,
      }),
    );

    this.parks = data;
  }
}

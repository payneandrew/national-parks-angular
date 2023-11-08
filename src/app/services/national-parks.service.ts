import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { ParkDetail, ParkResponse } from '../models/parks';
import { USStates } from '../models/states';

@Injectable({
  providedIn: 'root'
})
export class NationalParksService {

  constructor(private http: HttpClient) {}

  async getParks(stateCode: USStates): Promise<ParkDetail[]> {
    const params = new HttpParams()
      .set('stateCode', stateCode)
      .set('api_key', environment.NP_API_KEY);

    const { data } = await firstValueFrom(
      this.http.get<ParkResponse>(`https://developer.nps.gov/api/v1/parks`, {
        params,
      }),
    );

    return data;
  }


  async getParkDetail(parkCode: string): Promise<ParkDetail> {
    const params = new HttpParams()
      .set('parkCode', parkCode)
      .set('api_key', environment.NP_API_KEY);

    const { data } = await firstValueFrom(
      this.http.get<ParkResponse>(`https://developer.nps.gov/api/v1/parks`, {
        params,
      }),
    );

    return data[0];
  }
}

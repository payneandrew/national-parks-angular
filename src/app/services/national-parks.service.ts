import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { ParkResponse } from '../models/parks';
import { USStates } from '../models/states';

@Injectable({
  providedIn: 'root'
})
export class NationalParksService {

  constructor(private http: HttpClient) {}

  getParks(stateCode: USStates) {
    const response =
      this.http.get<ParkResponse>(`https://developer.nps.gov/api/v1/parks`, {
        params: {stateCode, api_key: environment.NP_API_KEY}
      }).pipe(map((response) => response.data))

    return response;
  }


getParkDetail(parkCode: string) {
    const response =
      this.http.get<ParkResponse>(`https://developer.nps.gov/api/v1/parks`, {
        params: {parkCode, api_key: environment.NP_API_KEY}
      }).pipe(map((response) => response.data[0]))
    return response
}
}

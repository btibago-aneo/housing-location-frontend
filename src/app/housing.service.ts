import { Injectable } from '@angular/core';
import { HousingLocation } from './interfaces/housinglocation';
import { HttpClient } from '@angular/common/http';
import { map }  from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  
  url = 'http://localhost:3000';
  
  constructor(private http: HttpClient) {} 

   getAllHousingLocations()  {
      return this.http.get(`${this.url}/houses`).pipe(map((res) => res));
  }
  
   getHousingLocationById(id: number) {
    return this.http.get(`${this.url}/houses/${id}`);
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
  }
}

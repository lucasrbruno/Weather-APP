import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {

  constructor(private http: HttpClient) { }


  getWeather() {
    return this.http.get('https://api.weatherapi.com/v1/current.json?key=aa137547445d44fe953131600242501&q=Conselheiro+Lafaiete');
  }
}

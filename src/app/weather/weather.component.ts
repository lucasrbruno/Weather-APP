import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  weather: any = {
    location: '',
    current: {
      temp_c: '',
      feelslike_c: '',
      humidity: '',
      pressure_mb: '',
      condition: {
        icon: ''
      }
    }
  };
  constructor (private weatherService: WeatherService){
  }

  ngOnInit(): void {
    this.weatherService.getWeather().subscribe({
      next: (res) => {
        console.log(res);
        this.weather = res;
      },
      error: (err) => console.log(err.message),
      complete: () => console.info('API CALL completed')
    })
  }
}

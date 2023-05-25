import { Component } from '@angular/core';
import { HousingLocation } from '../interfaces/housinglocation';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  housingLocationList: HousingLocation[] ;
  filteredLocationList: HousingLocation[];
  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
    }
  
    this.filteredLocationList = this.housingLocationList.filter(
      housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
  }

  constructor(private housingService: HousingService) {
    this.housingLocationList = [];
    this.filteredLocationList = [];
  }

  ngOnInit() {
    this.housingService.getAllHousingLocations().subscribe((data) => {
      this.housingLocationList = data as HousingLocation[];
      this.filteredLocationList = this.housingLocationList;
    });
  }
}


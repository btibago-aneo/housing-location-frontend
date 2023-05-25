import { Component, inject } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../interfaces/housinglocation';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  housingLocation: HousingLocation | undefined;

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });

  constructor(private route: ActivatedRoute, private housingService: HousingService) {}

  ngOnInit() {
    const housingLocationId = parseInt(this.route.snapshot.params['id']);
    this.housingService.getHousingLocationById(housingLocationId).subscribe((data) => {
      console.log(data)
      this.housingLocation  = data as HousingLocation
    });
  }
  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
  }
}

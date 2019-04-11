import { Component, OnInit } from '@angular/core';
import { Car } from '../car-list/Car';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  car:Car;
  constructor() { }

  ngOnInit() {
    
  }

}

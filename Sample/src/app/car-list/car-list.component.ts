import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Car} from './Car';
import {Router} from '@angular/router';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  show(){
    this.router.navigate(['/addcar']);
  }

  public cars:Car[];

  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit() {
    this.http.get<Car[]>("http://localhost:8080/all").subscribe((data)=> {
      console.log(data);
      this.cars = data;
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-passengers',
  templateUrl: './view-passengers.component.html',
  styleUrls: ['./view-passengers.component.css']
})
export class ViewPassengersComponent implements OnInit {

  constructor(private myApi:ApiService) {
    this.fetchData()
   }

  fetchData = ()=>{
    this.myApi.airlineData().subscribe(
      (data) =>{
        this.passengersList = data
      }
    )
  }
  
  passengersList:any = {}

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-airlines',
  templateUrl: './view-airlines.component.html',
  styleUrls: ['./view-airlines.component.css']
})
export class ViewAirlinesComponent implements OnInit {

  constructor(private myApi:ApiService) {
    this.fetchData()
   }

  fetchData = ()=>{
    this.myApi.airlineDatas().subscribe(
      (data)=>{
        this.airData = data
      }
    )
  }
  airData:any = []

  ngOnInit(): void {
  }

}

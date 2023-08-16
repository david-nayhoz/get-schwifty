import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-bord-game',
  templateUrl: './bord-game.component.html',
  styleUrls: ['./bord-game.component.css']
})
export class BordGameComponent implements OnInit {

  constructor(private dataService : DataServiceService, ) { }

  matSize: number = 3;
  matrix: number[][] = [];
  
  ngOnInit(): void{
    this.matrix = this.dataService.bildMatrix(this.matSize);  
  }

  bildMatrix(){
    this.matrix.length = 0;
    this.matrix = this.dataService.bildMatrix(this.matSize);    
  }

  test(value: number): Boolean{
    return value != (this.matSize * this.matSize) ? true : false;
  }

}

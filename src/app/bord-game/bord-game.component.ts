import { Component } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-bord-game',
  templateUrl: './bord-game.component.html',
  styleUrls: ['./bord-game.component.css']
})
export class BordGameComponent {

  constructor(private dataService : DataServiceService) { }

  matSize: number = 3;

  bildMatrix(){
    this.dataService.bildMatrix(this.matSize);    
  }
}

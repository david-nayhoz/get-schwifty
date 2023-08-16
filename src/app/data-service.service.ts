import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }
  
  mat: number[][] = [];

  bildMatrix(matSize: number){
    for(let i = 0; i < matSize; i++){
      for(let j= 0; j < matSize; j++){
        this.mat[i][j] = 9;
      }  
    }
  }

  setUniqNumbers(){
    
  }
}

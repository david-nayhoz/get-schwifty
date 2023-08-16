import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }
  
  mat: number[][] = [];

  bildMatrix(matSize: number){
    for(let i = 0; i < matSize; i++){
      this.mat[i] = [];
      for(let j= 0; j < matSize; j++){
        this.mat[i].push(this.setUniqNumbers(matSize));
      }
    }
    return this.mat;
  }

  setUniqNumbers(matSize: number): number{
    let randomNumber: number = 0;
    do {
      randomNumber = Math.floor(Math.random() * (matSize * matSize)) + 1;   
    } while (this.ExistsInMat(randomNumber));
    return randomNumber; 
  }

  ExistsInMat(randomNumber: number): boolean{
    for(let row of this.mat){
      for(let col of row){
        if(col == randomNumber)
          return true;
      }
    }
    return false;
  }
}

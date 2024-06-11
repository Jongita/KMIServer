import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class kmicalculatorService {

  constructor(private http:HttpClient) { }

  public sendCalculate(x:number, y:number){
    return this.http.post("http://localhost:3998/kmiSkaiciuokle/skaiciuoti",{
      "x":x,
      "y":y
    })
  }
}
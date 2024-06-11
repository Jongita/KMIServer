import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { kmicalculatorService } from '../../services/kmicalculator.service';

@Component({
  selector: 'app-kmicalculator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './kmicalculator.component.html',
  styleUrl: './kmicalculator.component.css'
})
export class KmicalculatorComponent {
  public result:string|null=null;
  public x:number|null=null;
  public y:number|null=null;

  constructor (private kmicalculatorServise:kmicalculatorService){

  }

  public calculate(){
    if(this.x!=null && this.y!=null){
    this.kmicalculatorServise.sendCalculate(this.x,this.y).subscribe((data:any)=>{
      this.result="Jūsų kūno masės indeksas yra: " +data.rezultatas;
    });
  }
  }
}

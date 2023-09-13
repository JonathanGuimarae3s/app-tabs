import { Component } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  height: string | number = '';
  imc = 0;
  weight: string | number = '';
  constructor() { }
  calculate() {
    this.height = Number(this.height)/100;
    this.weight = Number(this.weight);
    this.imc = this.weight / (this.height ** 2)


  }
  clearBoxes(){
    this.height='';
    this.weight='';


  }


}

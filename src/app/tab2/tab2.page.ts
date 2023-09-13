import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  quant: number = 0;
  try: string = '';
  result: boolean = false;
  randomNumber: string = (Math.random() * 10).toFixed();
  constructor() { }

  ngOnInit() {
  }
  verify() {

    if (this.try === this.randomNumber) {
      alert(`acertou ${this.randomNumber}`)
    } else {
      this.quant++
      this.result = false
      console.log(this.randomNumber)
    }
  }


}

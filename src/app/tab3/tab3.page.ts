import { Component } from '@angular/core';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  empty = false;
  dogAge = "";
  humanAge = 0;
  constructor() { }

  showAge() {

    this.humanAge = 7 * Number(this.dogAge);


  }
  clearBox() {

   
      const input = document.getElementById('dogAge');
      input?.setAttribute("value", '');



  }
}

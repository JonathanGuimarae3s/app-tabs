import { Component } from '@angular/core';
import { IonicModule, ToastController } from '@ionic/angular';



@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],

})
export class Tab2Page {
  public sorteado = 0;
  public num1 = '';
  public num2 = '';
  public msg = '';
public foot='';

  constructor(public toastCtrl: ToastController) { }

  ngOnInit() {
  }
  clear() {
    this.num1 = '';
    this.num2 = '';
    this.sorteado = 0;
  }
  random(): any {
    var a = Number(this.num1)
    var b = Number(this.num2)
    if (String(a) == 'NaN' || String(b) == 'NaN') {
      this.msg = 'É preciso preencher os campos!';
      this.presentToast(this.msg);
    } else {
      if (a > -1 && b < 10000) {
        if (a == b) {
          this.msg = 'Não use números iguais!';
          this.presentToast(this.msg);
          this.num1 = '';
          this.num2 = '';
          this.sorteado = 0;
        } else if (a > b) {
          console.log('A é maior que B')
          this.msg = 'Número inicial não deve ser maior que o final!';
          this.presentToast(this.msg);
          this.num1 = '';
          this.num2 = '';
          this.sorteado = 0;
        } else {
          var rand = Math.floor(Math.random() * (b - a + 1) + a);
          return this.sorteado = rand
        }
      } else {
        this.msg = 'Os números devem ser entre 0 e 99999';
        this.presentToast(this.msg);
        this.num1 = '';
        this.num2 = '';
        this.sorteado = 0;
      }
    }
  }
  async presentToast(msg:string){
    this.verify();
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 6000,
      position: 'top'
    });


    toast.present();
  }
  async verify(){
    if(Number(this.foot)==this.sorteado){

      var toast = await this.toastCtrl.create({
        message: "voce acertou, ganhou 30 pts",
        duration: 2000,
        position: 'top'
      });
    }else{
      var toast = await this.toastCtrl.create({
        message: "voce errou, ganhou 0 pts",
        duration: 2000,
        position: 'top'
      });
    }
    toast.present();

  }


}

import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {

  usuario!: string;
  
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

irALogin(){
  this.navCtrl.navigateForward('/login');
}  
}

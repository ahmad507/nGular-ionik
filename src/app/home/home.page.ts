import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private home_timer: number = 0;

  constructor(
    private loadingController: LoadingController,
    private router : Router
  ) {}

  private timer_count (params:any) {
    return params * 1000
  }

  private async checkSession() {
    clearTimeout(this.home_timer);
    let loading = await this.loadingController.create({
      message: 'Please wait...',
    });
    this.home_timer = setTimeout(() =>{
      loading.present();
      console.log('present');
    }, this.timer_count(2))

    this.home_timer = setTimeout(() =>{
      loading.dismiss();
      console.log('dismiss');
      this.router.navigate(['login-page'])
    }, this.timer_count(8))
  }

  ngOnInit(){
    this.checkSession().then(res =>{
      console.log(res)
    });

  }
}

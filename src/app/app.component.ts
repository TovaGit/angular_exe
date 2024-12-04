import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  name = 'Tova!';
  currentTime=Date;

  WhatsNow(){
    const now = new Date();
    const hours = now.getHours(); 

    if (hours >= 5 && hours < 12) {
      return 'בוקר טוב';
    } else if (hours >= 12 && hours < 18) {
      return 'צהריים טובים';
    } else {
      return 'ערב טוב';
    }
  }

  }
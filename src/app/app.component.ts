import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

import { AngularFireMessaging } from '@angular/fire/compat/messaging';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'PWA Angular';

  constructor(
    private swUpdate: SwUpdate,
    private messaging: AngularFireMessaging
  ) {}

  ngOnInit() {
    this.updatePWA();
    this.requestPermission();
    this.listenNotifications();
  }

  updatePWA = () => {
    this.swUpdate.available.subscribe((value) => {
      // if (confirm('New version available. Load New Version?')) {
      //   window.location.reload();
      // }
      console.log('update:' + value);
      window.location.reload();
    });
  };

  requestPermission = () => {
    this.messaging.requestToken.subscribe(
      (token: any) => {
        console.log(token);
      },
      (err: any) => {
        console.error('Unable to get permission to notify.', err);
      }
    );
  };

  listenNotifications = () => {
    this.messaging.messages.subscribe((message) => {
      console.log(message);
      // RUTA EN ESPECIFICO PARA VER PRODUCTO EJEMPLO
    });
  }

}

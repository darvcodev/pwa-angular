import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

import { AngularFireMessaging } from '@angular/fire/compat/messaging';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';

interface Token {
  token: string | null;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'PWA Angular';

  private tokensCollections: AngularFirestoreCollection<Token>;

  constructor(
    private swUpdate: SwUpdate,
    private afMessaging: AngularFireMessaging,
    private database: AngularFirestore
  ) {
    this.tokensCollections = this.database.collection<Token>('tokens');
  }

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

  requestPermission() {
    this.afMessaging.requestToken.subscribe(
      (token) => {
        console.log('Permission granted! Save to the server!', token);
        this.tokensCollections.add({ token });
      },
      (error) => {
        console.error(error);
      }
    );
  }

  listenNotifications = () => {
    this.afMessaging.messages.subscribe((message) => {
      console.log(message);
      // RUTA EN ESPECIFICO PARA VER PRODUCTO EJEMPLO
    });
  };
}

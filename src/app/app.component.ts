import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'PWA Angular';

  constructor(private swUpdate: SwUpdate) {}

  ngOnInit() {
    this.updatePWA();
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
}

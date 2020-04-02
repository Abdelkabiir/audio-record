import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HomeComponent } from './pages/home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  rootPage: any = HomeComponent;
  menuRoutes = [
    {
      name: 'Profile',
      ulr: 'Profile',
      icon: 'person-outline'
    },
    {
      name: 'Records',
      ulr: 'records',
      icon: 'list-outline'
    },
    {
      name: 'Settings',
      ulr: 'settings',
      icon: 'settings-outline'
    }
  ];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menu: MenuController,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      // this.splashScreen.hide();
    });
  }

  openMenu() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ThemingAngular';

  // User setting/preference API - which will fetch the saved
  // user has saved Darktheme is true else it will be false
  // isDarktheme = false;  // for light theme
  // isDarktheme = true;   // for dark theme
  // 2nd method.
  theme: string = 'light-theme';

  toggleTheme() {
    this.theme = this.theme === 'light-theme' ? 'dark-theme' : 'light-theme';
  }
}

import { Component } from '@angular/core';
import { ThemeService } from './theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'portfolio';

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    const theme = localStorage.getItem('jfprofiletheme');
    if (theme) {
      this.themeService.setTheme(theme);
    } else {
      this.themeService.setTheme('dark');
    }
  }
}

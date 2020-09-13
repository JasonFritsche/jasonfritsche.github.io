import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/theme/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public themeIcon: string = 'white-balance-sunny';
  public title: string = '<Jason/>';

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {}

  public changeTheme(): void {
    const theme = this.themeService.getActiveTheme();
    const newTheme = theme.name === 'dark' ? 'light' : 'dark';
    this.themeIcon =
      newTheme === 'dark' ? 'weather-night' : 'white-balance-sunny';
    this.themeService.setTheme(newTheme);
  }
}

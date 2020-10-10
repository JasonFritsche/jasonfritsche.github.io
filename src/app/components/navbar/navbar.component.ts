import { Component, OnInit, Input } from '@angular/core';
import { ThemeService } from 'src/app/theme/theme.service';
import { Theme } from 'src/app/theme/symbols';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input('class') panelClass: string;
  public themeIcon: string = 'white-balance-sunny';
  public title: string = '<Jason/>';
  public currentTheme: string;
  public menuPanelBackgroundColor: string;
  public menuPanelTextColor: string;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    const theme = this._getTheme();
    this.currentTheme = theme.name === 'light' ? 'light' : 'dark';
    this._updateNavbar(this.currentTheme);
  }

  public changeTheme(): void {
    const theme = this._getTheme();
    this.currentTheme = theme.name === 'light' ? 'dark' : 'light';
    this._updateNavbar(this.currentTheme);
    this.themeService.setTheme(this.currentTheme);
  }

  private _getTheme(): Theme {
    return this.themeService.getActiveTheme();
  }

  private _updateNavbar(theme: string) {
    this.themeIcon = theme === 'dark' ? 'weather-night' : 'white-balance-sunny';
    this.menuPanelBackgroundColor = theme === 'dark' ? '#292c2e' : '#1e359c';
    this.menuPanelTextColor = theme === 'dark' ? '#d1d1d1' : '#dbdbdb';
  }
}

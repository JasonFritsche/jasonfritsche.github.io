import { Component, OnInit } from '@angular/core';
import * as data from './projects.json';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  public show = 3;
  public projects: any = (data as any).default;
  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit, Input } from '@angular/core';

interface Project {
  name: string;
  description: string;
  repo: string;
  site: string;
}

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  @Input() project: Project;
  isActive = false;

  constructor() {}

  ngOnInit(): void {}
}

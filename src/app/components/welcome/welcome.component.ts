import { Component, OnInit } from '@angular/core';
import { TextAnimation } from 'ngx-teximate';
import {
  fadeInDown,
  slideInLeft,
  tada,
  bounceIn,
  bounceInLeft,
  bounceInRight,
  bounceInUp,
  fadeInUp,
  fadeIn,
  bounceInDown,
} from 'ng-animate';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public line1: string = 'Hello and welcome.';
  public line2: string = "My name is Jason, I'm a web developer.";
  public line3: string = 'Thanks for stopping by!';

  public lineOneAnimation: TextAnimation = {
    animation: bounceInDown,
    delay: 200,
    type: 'word',
  };

  public lineTwoAnimation: TextAnimation = {
    animation: bounceIn,
    delay: 150,
    type: 'letter',
  };

  public lineThreeAnimation: TextAnimation = {
    animation: bounceInUp,
    delay: 1400,
    type: 'word',
  };
}

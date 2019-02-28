import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  start = false;
  constructor() { }

  ngOnInit() {
    setTimeout(() => this.start = true, 1000);
      new Typed('#typed', {
      strings: ['Web Developer', 'Web Designer', 'Video Editor', 'Graphic Designer'],
      typeSpeed: 70,
      backSpeed: 40,
      loop: true
    });
  }

}

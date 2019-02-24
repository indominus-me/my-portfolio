import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  start = false;
  constructor() { }

  ngOnInit() {
    setTimeout(() => this.start = true, 1000)
  }

}

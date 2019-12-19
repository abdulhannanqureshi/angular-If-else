import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-for-loop',
  templateUrl: './new-for-loop.component.html',
  styleUrls: ['./new-for-loop.component.css']
})
export class NewForLoopComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  cout = 1;
  menus = ["home","about","contact","ifelse","forloop"];

}

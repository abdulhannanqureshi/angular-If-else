import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-loop',
  templateUrl: './for-loop.component.html',
  styleUrls: ['./for-loop.component.css']
})
export class ForLoopComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ten = [1,2,3,4,5,6,7,8,9,"complite"];
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  users = [
  		{
  			firstName: "abdul",
  			lastName: "qureshi",
  			id: 301,
  			userImg: "assets/img/img_user1.jpg",
  			city: "Indor"
  		},
  		{
  			firstName: "Alwin",
  			lastName: "patidar",
  			id: 302,
  			userImg: "assets/img/img_user2.jpg",
  			city: "Gudgao"
  		},
  		{
  			firstName: "aakash",
  			lastName: "jain",
  			id: 303,
  			userImg: "assets/img/img_user3.jpg",
  			city: "Jbalpure"
  		},
        {
        firstName: "aakash",
        lastName: "jain",
        id: 303,
        userImg: "assets/img/img_user3.jpg",
        city: "Jbalpure"
      },
        {
        firstName: "aakash",
        lastName: "jain",
        id: 303,
        userImg: "assets/img/img_user3.jpg",
        city: "Jbalpure"
      },
        {
        firstName: "aakash",
        lastName: "jain",
        id: 303,
        userImg: "assets/img/img_user3.jpg",
        city: "Jbalpure"
      },
        {
        firstName: "aakash",
        lastName: "jain",
        id: 303,
        userImg: "assets/img/img_user3.jpg",
        city: "Jbalpure"
      },
        {
        firstName: "aakash",
        lastName: "jain",
        id: 303,
        userImg: "assets/img/img_user3.jpg",
        city: "Jbalpure"
      },
        {
        firstName: "aakash",
        lastName: "jain",
        id: 303,
        userImg: "assets/img/img_user3.jpg",
        city: "Jbalpure"
      },
  ];
}

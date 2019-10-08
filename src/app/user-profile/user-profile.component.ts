import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  nom = 'Bob';
  imageSrc = 'https://via.placeholder.com/350x150';
  isVisible = true;

  User = {
    name: 'Doe',
    firstName: 'John',
    age: 25,
    quote: 'Two beer or not two beer',
    photo: 'https://randomuser.me/api/portraits/lego/2.jpg'
  };


  constructor() { }

  ngOnInit() {

  }
  cache() {
    this.isVisible = !this.isVisible;
  }
}

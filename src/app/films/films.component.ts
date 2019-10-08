import {Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})


export class FilmsComponent implements OnInit {
  showMovie = true;

  films = [{
    title: 'Jaws',
    year : 1975,
  }, {
    title: 'Taxi Driver',
    year : 1976,
  }, {
    title: 'Apocalypse Now',
    year : 1979,
  } ];

  constructor() { }

  ngOnInit() {  }

  getStatus() {
    this.showMovie = !this.showMovie;
  }

  buttonTitle() {
   if (this.showMovie === true) {
     return 'Hidde List';
   } else { return 'Show List';
   }
  }
}

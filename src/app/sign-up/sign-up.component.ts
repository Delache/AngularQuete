import { Component, OnInit } from '@angular/core';
import { Form } from '../app.form';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  model: Form = new Form();
  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    console.log('message envoyé');
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

private loginTitle :string;

  constructor() {
      this.loginTitle = "KPIT login";

   }

  ngOnInit() {
  }

}

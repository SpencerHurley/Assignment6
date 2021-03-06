import { Component, OnInit } from '@angular/core';
import {Route, Router} from "@angular/router";
import {UserServiceClient} from "../services/user.service.client";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username;
  password;
  login(username, password) {
    console.log([username, password]);
    this.service
      .login(username, password)
      .then(user => user.json())
      .then((user) => {
        if (user != null) {
          console.log("Not null");
          console.log(user);
          this.router.navigate(['profile']);
        } else {
          window.alert("Invalid login. Please enter valid credentials or register.");
        }
      });
  }

  constructor(private router: Router,
              private service: UserServiceClient) { }

  ngOnInit() {
  }

}

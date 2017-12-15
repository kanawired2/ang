import { Component, OnInit } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {NgModule} from '@angular/core';
import {Router} from "@angular/router";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myform:FormGroup;

  private LoginUrl = "http://local-drupal.com/dtutor/user/login?_format=json";

  constructor(private router: Router, protected httpClient: HttpClient) { }

  ngOnInit() {
      this.myform = new FormGroup({
          name : new FormControl('', Validators.required),
          pass : new FormControl('', [
              Validators.required
          ]),
      });
  }


  onSubmit(e) {
    
    e.preventDefault();
    
    var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;
    
    var data = JSON.stringify(this.myform.value);

    const req = this.httpClient.post(this.LoginUrl , {
          name: username,
          pass: password
        }).subscribe(
            res => {
              console.log(res);
              this.router.navigateByUrl('nodes');
            },
            err => {
              alert('Wrong Credentials!');
              console.log("Error occured");
            }
        );        
  }

}

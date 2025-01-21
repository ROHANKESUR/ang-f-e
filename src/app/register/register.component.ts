import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-register',
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerData: any = {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  newRegisterData: any = [];


  constructor(private http: HttpClient, private router: Router) { }

  onClick() {
    this.http.post("http://localhost:8085/api/auth/register", this.registerData, {

      responseType:'text'
    }).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(["/login"]);
        alert("Registered succesfully");
      }, error: (e) => {
        console.log(e);

      }
    })

  }

}



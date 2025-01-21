import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthserviceService } from '../service/authservice.service';
import { ToastComponent } from "../toast/toast.component";
import { ToastService } from '../service/toast.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule, ToastComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  loginData: any = {
    username: '',
    password: ''
  }
  

  constructor(private router: Router, private authService: AuthserviceService,private toastService:ToastService) {

  }

  onSubmit() {

    if ((this.loginData.username != null && this.loginData.password != null)
      && (this.loginData.username != '' && this.loginData.password != '')) {

      this.authService.generateToken(this.loginData).subscribe({
        next: (response) => {
          console.log(response);
          this.authService.loggeninUser(JSON.stringify(response))
          this.toastService.setToast('Logged In SuccessFully','success');
          this.router.navigate(['/home']); 
        }
        ,
        error: (e) => {
          
          console.log(e);

        }
      })


    } else {
      console.log("feilds must not be empty or null")
    }
  }

}

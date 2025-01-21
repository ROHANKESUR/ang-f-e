import { Component } from '@angular/core';
import { AuthserviceService } from '../../../service/authservice.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faCircleUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user',
  imports: [FontAwesomeModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  userIcon = faCircleUser
  userName:any; 
  constructor(private authservice: AuthserviceService,){
    const user = authservice.getUserFromToken(authservice.getToken());
    this.userName = user.sub;
  }


  logout() {
    if(confirm('Are you sure want logOut?')){
      this.authservice.logOut();
    }
    window.location.reload();
  }
}

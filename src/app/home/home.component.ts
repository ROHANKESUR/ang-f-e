import { Component, signal } from '@angular/core';
import { NavbarComponent } from "./navbar/navbar.component";
import { HttpClient } from '@angular/common/http';
import { AuthserviceService } from '../service/authservice.service';
import { PostsComponent } from "../posts/posts/posts.component";

@Component({
  selector: 'app-home',
  imports: [NavbarComponent,PostsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private http: HttpClient, private authService: AuthserviceService) {
    
  }


  

  


}

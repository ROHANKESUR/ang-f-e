import { Component, Input } from '@angular/core';
import { AuthserviceService } from '../../service/authservice.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faCircleUser, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Router, RouterLink } from '@angular/router';
import { CreatePostComponent } from '../../posts/create-post/create-post.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { UserComponent } from "./user/user.component";

@Component({
  selector: 'app-navbar',
  imports: [FontAwesomeModule, CreatePostComponent, SidebarComponent, UserComponent,RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  burger = faBars;
  plus = faPlus;
  isEnabled = false;
  sideBarEnabled = false;
  userIcon = faCircleUser;
  profileEnable = false;
  constructor(private router: Router) { }

  onOpenClick() {
    this.isEnabled = true;
  }

  onClose() {
    this.isEnabled = false;
  }

  onsideToggle() {
    this.sideBarEnabled = !this.sideBarEnabled;
    console.log("sidebar" + this.sideBarEnabled);
  }

  onCloseSide() {
    this.sideBarEnabled = false;
  }

  toggleProfile() {
    this.profileEnable = !this.profileEnable
  }

}

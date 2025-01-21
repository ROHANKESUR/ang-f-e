import { Component } from '@angular/core';
import { LoginComponent } from "./login/login.component";
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { ToastComponent } from "./toast/toast.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ToastComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ang-1';
}

import { HttpClient } from '@angular/common/http';
import { Component, computed, EventEmitter, HostListener, Output, signal } from '@angular/core';
import { AuthserviceService } from '../../service/authservice.service';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CrudPostComponent } from '../crud-post/crud-post.component';


@Component({
  selector: 'app-posts',
  imports: [FontAwesomeModule, CrudPostComponent],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {
  posts: any[] = [];
  menu = faEllipsis;
  selectedId: string = '';
  flag=false;


  constructor(private http: HttpClient, private authService: AuthserviceService) {

    http.get<any>("http://localhost:8085/api/post/getAllPosts", {
      headers: {
        'Authorization': `Bearer ${authService.getToken()}`
      }
    }).subscribe({
      next: (res) => {

        this.posts = res;

      },
      error: (e) => {
        console.error("error while fetching postsdata" + e);

      }
    })
  }


  slectedIdMenu(id: string) {
    this.selectedId = this.selectedId === id ? '' : id;
    this.flag=!this.flag;
  }

  enableMenu(id: string): boolean {
    if (this.selectedId == id) return true;
    return false;
  }

  resetMenu(){
    this.selectedId = '';
  }


}



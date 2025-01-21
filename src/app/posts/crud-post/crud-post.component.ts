import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AuthserviceService } from '../../service/authservice.service';
import { Router } from '@angular/router';
import { CreatePostComponent } from "../create-post/create-post.component";

@Component({
  selector: 'app-crud-post',
  imports: [CreatePostComponent],
  templateUrl: './crud-post.component.html',
  styleUrl: './crud-post.component.css',
})
export class CrudPostComponent {
  @Input({ required: true }) post: any;
  @Input({ required: true }) selectId!: string;
  isEditorEnabled=false;
  
 

  constructor(
    private http: HttpClient,
    private authservice: AuthserviceService,
    private router:Router
  ) { }

  onDelete() {
    this.http
      .delete('http://localhost:8085/api/post/deletePost?id=' + this.selectId, {
        headers: {
          Authorization: `Bearer ${this.authservice.getToken()}`,
        },
      })
      .subscribe({
        next: (res) => {
          console.log(JSON.stringify(res) + 'Deleted Successfully');
          window.location.reload();
        },
        error: (e) => {
          console.log('error occurred while deleting' + e);
        },
      });
  }

  toggleEditor() {
   this.isEditorEnabled = !this.isEditorEnabled;
  // this.router.navigate(['create'])
  }

}

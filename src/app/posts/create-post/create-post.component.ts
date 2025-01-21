import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthserviceService } from '../../service/authservice.service';
import { CommonModule } from '@angular/common';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-create-post',
  imports: [FormsModule, CommonModule,FontAwesomeModule],
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css'],
})
export class CreatePostComponent {
  @Output() closeEditor = new EventEmitter<void>();
  @Input() id!: string;
  xMark = faXmark;

  postdata: any = {
    title: '',
    content: '',
  };
  constructor(
    private http: HttpClient,
    private authservice: AuthserviceService
  ) {}

  onSubmit() {
    if (
      this.postdata.title !== null &&
      this.postdata.content !== null &&
      this.postdata.title !== '' &&
      this.postdata.content !== ''
    ) {
      console.log(this.authservice.getToken());

      if (this.authservice.isLoggedIn()) {
        if (this.id == null) {
          this.http
            .post('http://localhost:8085/api/post/createPost', this.postdata, {
              headers: {
                Authorization: `Bearer ${this.authservice.getToken()}`,
              },
            })
            .subscribe({
              next: (res) => {
                console.log('Post created successfully', res);
                this.postdata = { title: '', content: '' };
                this.closeEditor.emit();
                window.location.reload();
              },
              error: (e) => {
                console.error('Error occurred while creating post', e);
                if (e.status === 401) {
                  console.error(
                    'Unauthorized: Please check the token or login again.'
                  );
                }
              },
            });
        } else {
          this.http
            .put(
              `http://localhost:8085/api/post/updatePost?id=${this.id}`,
              this.postdata,
              {
                headers: {
                  Authorization: `Bearer ${this.authservice.getToken()}`,
                },
              }
            )
            .subscribe({
              next: (res) => {
                console.log(
                  'post updated suucessfully\n' + JSON.stringify(res)
                );
                this.closeEditor.emit();
                window.location.reload;
              },
              error: (e) => {
                console.error('error occured while updating');
              },
            });
        }
      }
    }
  }

  onCancel() {
    console.log('cancel' +this.id);
    this.closeEditor.emit();
  }
}

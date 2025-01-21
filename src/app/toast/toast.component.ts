import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { ToastService } from '../service/toast.service';

@Component({
  selector: 'app-toast',
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css'
})
export class ToastComponent implements OnInit {
  cancelMark = faXmark;
  isToastVisible = false;
  message: string = 'success';
  status: 'success' | 'failed' | 'warning' = 'success';
  toastService = inject(ToastService);

  ngOnInit() {
    this.toastService.getToast().subscribe((data) => {
      this.message = data.message;
      this.status = data.status;
      this.isToastVisible = true;

      setTimeout(() => {
        this.isToastVisible = false;
      }, 3000);
    });

  }

  onClose() {
    this.isToastVisible = false;
  }


}

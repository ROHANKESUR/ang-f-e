import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faXmark, faBars, faBarsStaggered } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  xMark = faXmark;
  @Input({ required: true }) isSideOpen = false;
  @Output() onOpen=new EventEmitter<boolean>();
  burger = faBars;

  onClick(){
    this.onOpen.emit()
  }
}

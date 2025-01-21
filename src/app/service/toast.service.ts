import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ToastService {
  constructor() { }

  private toastSubject = new Subject<any>();

  public setToast(message:string,status:string){
    this.toastSubject.next({message,status})
  }

  public getToast(){
    return this.toastSubject.asObservable();
  }
}

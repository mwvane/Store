import { Component } from '@angular/core';
import { ToastService } from '../toast.service';
import { Toast, toastType } from '../toast_model';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css'
})
export class ToastComponent {
  constructor(public toastService: ToastService){}
  hide(e: Event, toast: Toast){
    e.preventDefault()
    e.stopPropagation()
    this.toastService.hide(toast)
  }

  getIconByStatus(status: toastType){
    if(status === toastType.success){
      return "bi bi-check-circle"
    }
    else if(status === toastType.error) {
      return "bi bi-x-circle"
    }
    else if(status === toastType.warrning) {
      return "bi bi-exclamation-circle"
    }
    return "bi bi-info-circle"
  }
}

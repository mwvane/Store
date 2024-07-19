import { Component } from '@angular/core';
import { ToastService } from '../toast.service';
import { Toast, toastType } from '../toast_model';
import { helpers } from '../../helpers/helpers';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css',
})
export class ToastComponent {
  constructor(public toastService: ToastService) {}
  hide(e: Event, toast: Toast) {
    e.preventDefault();
    e.stopPropagation();
    this.toastService.hide(toast);
  }

  getIconByStatus(status: toastType) {
    if (status === toastType.success) {
      return 'bi bi-check-circle-fill';
    } else if (status === toastType.error) {
      return 'bi bi-x-circle-fill';
    } else if (status === toastType.warning) {
      return 'bi bi-exclamation-circle-fill';
    }
    return 'bi bi-info-circle-fill';
  }

  getStatusName(status: number){
    return helpers.enum.getEnumKeyByValue(toastType,status)
  }
}

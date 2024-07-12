import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../error handler/notification.service';

@Component({
  selector: 'app-notifiaction',
  templateUrl: './notifiaction.component.html',
  styleUrl: './notifiaction.component.css',
})
export class NotifiactionComponent{
  constructor(public notificationService: NotificationService) {}
}

import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../Services/notification.service';

@Component({
  selector: 'app-notifiaction',
  templateUrl: './notifiaction.component.html',
  styleUrl: './notifiaction.component.css',
})
export class NotifiactionComponent{
  constructor(public notificationService: NotificationService) {}
}

import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ModalService } from '../../core/Services/modal.service';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrl: './login-modal.component.css',
})
export class LoginModalComponent {
  constructor(private router: Router, public modalService: ModalService) {}
}

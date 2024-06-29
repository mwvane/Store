import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { ModalService } from '../../Services/modal.service';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrl: './confirm-dialog.component.css'
})
export class ConfirmDialogComponent {
  constructor(public modalService: ModalService){}
  @Input() headerText: string = "confirm"
  @Input() bodyText: string = ""
  @Input() yesText: string = "confirm"
  @Input() noText: string = "cancel"
  @Output() yes = new EventEmitter()
  @Output() no = new EventEmitter()
  onYes(){
    this.yes.emit(true)
    this.modalService.confirmDilaog = false
  }
  onNo(){
    this.no.emit(false)
    this.modalService.confirmDilaog = false
  }

}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { fileTypes } from '../../Enums/fileType';

@Component({
  selector: 'app-file-uploder',
  templateUrl: './file-uploder.component.html',
  styleUrl: './file-uploder.component.css'
})
export class FileUploderComponent {
  @Input() fileType = fileTypes.image
  @Output() selectFiles = new EventEmitter()
  onSelectFile(e: any) {
    console.log(e.files);
    this.selectFiles.emit(e.files)
  }
}

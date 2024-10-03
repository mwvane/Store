import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { fileTypes } from '../../Enums/fileType';

@Component({
  selector: 'app-file-uploder',
  templateUrl: './file-uploder.component.html',
  styleUrl: './file-uploder.component.css',
})
export class FileUploderComponent {
  @Input() fileType = fileTypes.image;
  @Input() multiple: boolean = false;
  @Output() selectFiles = new EventEmitter();
  @ViewChild('input') input! : ElementRef
  imagesUrls: { index: string; image: string }[] = [];
  onSelectFile(e: any) {
    // this.selectedFiles = Array.from(e.files);
    this.selectFiles.emit(e.files);
    if (e.files) {
      for (let i = 0; i < e.files.length; i++) {
        const reader = new FileReader();
        reader.readAsDataURL(e.files[i]);
        reader.onload = (event: any) => {
          this.imagesUrls.push({
            index: i.toString(),
            image: event.target.result,
          });
        };
      }
    }
  }

  removeItem(image: { index: string; image: string }) {
    this.imagesUrls = this.imagesUrls.filter((item) => item != image);
    var newFileList: File[] = [];
    if (this.input.nativeElement.value) {
      for (let i = 0; i < this.input.nativeElement.value.length.length; i++) {
        if (i.toString() != image.index) {
          newFileList.push(this.input.nativeElement.value[i]);
        }
      }
    }
    this.input.nativeElement.value = newFileList;
    this.selectFiles.emit(this.input.nativeElement.value)
  }

  clear() {
    this.input.nativeElement.value = null;
    this.imagesUrls = []
  }
}

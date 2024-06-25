import { Component } from '@angular/core';

@Component({
  selector: 'app-file-uploder',
  templateUrl: './file-uploder.component.html',
  styleUrl: './file-uploder.component.css'
})
export class FileUploderComponent {
  onSelectFile(e: any) {
    console.log(e.files);
  }
}

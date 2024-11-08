import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrl: './section.component.css',
})
export class SectionComponent {
  @Input() tittle: string = '';
  @Input() borderBottom: boolean = false;
  @Input() subSection: boolean = false;
  getclassName() {
    if (this.borderBottom && this.subSection)
      return 'border-bottom sub-section';
    else if (this.borderBottom) return 'border-bottom';
    else if (this.subSection) return 'sub-section';
    return '';
  }
}

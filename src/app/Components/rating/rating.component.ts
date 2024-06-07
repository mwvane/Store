import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css',
})
export class RatingComponent implements OnInit {
  @Input() rating: number = 0;
  @Input() maxRating: number = 5;
  @Input() readOnly: boolean = false;
  @Input() value: number = 0;
  @Output() ratingChange: EventEmitter<number> = new EventEmitter();

  hovered: number = 0;
  ngOnInit(): void {
    this.rating = this.value;
  }

  get stars(): any[] {
    let array = [];
    for (let i = 1; i <= this.maxRating; i++) {
      array.push(i);
    }
    return array;
  }

  rate(rating: number): void {
    if (!this.readOnly) {
      this.rating = rating;
      this.ratingChange.emit(this.rating);
    }
  }

  hover(index: number): void {
    if (!this.readOnly) {
      this.hovered = index;
    }
  }
}

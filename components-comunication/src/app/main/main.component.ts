import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @Output() isMarriedEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input() userName: string = "";

  @Input() married: boolean = false;

  count: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  sendData(): void {
    this.isMarriedEvent.emit(this.married)
  }
}

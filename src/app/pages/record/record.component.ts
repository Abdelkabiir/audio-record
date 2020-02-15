import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss'],
})
export class RecordComponent implements OnInit {
  @Output() stopEvent: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {}

  stop() {
    this.stopEvent.emit(null);
  }
}

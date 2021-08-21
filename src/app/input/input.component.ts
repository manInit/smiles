import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Output() inputSearchEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void { }

  updateSearch(text: string) {
    this.inputSearchEvent.emit(text);
  }
}

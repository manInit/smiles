import { Component, OnInit, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() title!: string
  @Input() searchValue!: string
  @Output() inputSearchEvent = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void { }

  updateSearch(text: string) {
    this.inputSearchEvent.emit(text);
  }
}

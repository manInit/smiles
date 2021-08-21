import { Component, OnInit, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { MenuItem } from '../interfaces/menuItem';
import { Emoji } from '../interfaces/emoji';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  @Input() title!: string
  @Input() searchValue!: string
  @Input() emojis!: Emoji[]
  @Input() menuItems!: MenuItem[]
  @Input() deleteHandler!: Function
  @Input() loveHandler!: Function
  @Input() restoreHandler!: Function
  @Output() inputSearchEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void { }

  updateSearch(text: string) {
    this.inputSearchEvent.emit(text);
  }
}

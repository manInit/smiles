import { Component, Input, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Emoji } from '../interfaces/emoji';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() titles!: string[]
  @Input() emojis!: Emoji[]
  @Input() deleteHandler!: Function
  @Input() loveHandler!: Function
  @Input() restoreHandler!: Function

  faStar = faStar
  fasStar = fasStar
  faTimes = faTimes

  constructor() { }

  ngOnInit(): void { }
}

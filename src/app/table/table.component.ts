import { Component, Input, OnInit } from '@angular/core';
import { faStar, IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Emoji } from '../interfaces/emoji';
import { Router } from '@angular/router';

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

  isShowFavorite: boolean = this.router.url !== '/love'
  faStar: IconDefinition = faStar
  fasStar: IconDefinition = fasStar
  faTimes: IconDefinition = faTimes

  constructor(private router: Router) { }

  ngOnInit(): void { }
}

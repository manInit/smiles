import { Component, OnInit } from '@angular/core';
import { PageAllService } from './page-all.service';

export interface Emoji {
  name: string
  url: string
  isLove: boolean
  isDeleted: boolean
}

@Component({
  selector: 'app-page-all',
  templateUrl: './page-all.component.html',
  styleUrls: ['./page-all.component.scss']
})
export class PageAllComponent implements OnInit {
  emojis: Emoji[] = []

  constructor(private pageAllService: PageAllService) { }

  ngOnInit(): void {
  }

  fetchEmojis() {
    this.pageAllService.fetchEmojis().subscribe((data: any) => {
      const temporaryArr: Emoji[] = [];
      for (const name in data) {
        temporaryArr.push({
          name,
          url: data[name],
          isLove: false,
          isDeleted: false
        });
      }

      this.emojis = temporaryArr;
    });
  }
}

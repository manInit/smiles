import { Component, OnInit } from '@angular/core';
import { Emoji } from '../interfaces/emoji';
import { MenuItem } from '../interfaces/menuItem';
import { menuItems, setActiveMenuItem } from '../menuItems';
import { restoreEmoji, searchEmojiByName } from '../emojiState';

@Component({
  selector: 'app-page-deleted',
  templateUrl: './page-deleted.component.html',
  styleUrls: ['./page-deleted.component.scss']
})
export class PageDeletedComponent implements OnInit {
  emojis: Emoji[] = []
  menuItems: MenuItem[] = menuItems
  searchValue: string = ''

  constructor() { }

  ngOnInit(): void {
    setActiveMenuItem('Удаленные');
    this.updateEmojis();
  }

  updateSearch(searchQuery: string) {
    this.searchValue = searchQuery;
    this.updateEmojis();
  }

  restoreEmoji(emoji: Emoji) {
    restoreEmoji(emoji);
    this.updateEmojis();
  }

  updateEmojis() {
    this.emojis = searchEmojiByName(this.searchValue).filter(emoji => emoji.isDeleted);
  }
}

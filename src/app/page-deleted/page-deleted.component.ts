import { Component, OnInit } from '@angular/core';
import { Emoji } from '../interfaces/emoji';
import { MenuItem } from '../interfaces/menuItem';
import { menuItems, setActiveMenuItem } from '../menuItems';
import { loadFromStorage } from '../localstorage';
import { restoreEmoji } from '../emojiState';

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
    this.loadDeletedEmoji();
  }

  updateSearch(searchQuery: string) {
    this.searchValue = searchQuery;
    this.updateEmojis();
  }

  updateEmojis() {
    if (this.searchValue === '') {
      this.loadDeletedEmoji();
      return;
    }
    const stateEmojis: Emoji[] = loadFromStorage();
    this.emojis = stateEmojis.filter(emoji => {
      return emoji.name.indexOf(this.searchValue) !== -1 && emoji.isDeleted
    }).sort((firstEmoji, secondEmoji) => {
      const firstLargerSecond: boolean = (firstEmoji.name.indexOf(this.searchValue) > 
        secondEmoji.name.indexOf(this.searchValue));
      return firstLargerSecond ? 1 : -1;
    });
  }

  loadDeletedEmoji() {
    const stateEmojis: Emoji[] = loadFromStorage();
    this.emojis = stateEmojis.filter(item => item.isDeleted);
  }

  restoreEmoji(emoji: Emoji) {
    restoreEmoji(emoji);
    this.updateEmojis();
  }
}

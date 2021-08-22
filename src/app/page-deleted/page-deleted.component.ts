import { Component, OnInit } from '@angular/core';
import { Emoji } from '../interfaces/emoji';
import { MenuItem } from '../interfaces/menuItem';
import { menuItems, setActive } from '../menuItems';
import { loadFromStorage } from '../localstorage';
import { restoreEmoji } from '../emojiState';

@Component({
  selector: 'app-page-deleted',
  templateUrl: './page-deleted.component.html',
  styleUrls: ['./page-deleted.component.scss']
})
export class PageDeletedComponent implements OnInit {
  emojis: Emoji[] = []
  stateEmojis: Emoji[] = []
  menuItems: MenuItem[] = menuItems
  searchValue: string = ''

  constructor() { }

  ngOnInit(): void {
    setActive('Удаленные');
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
    this.emojis = this.stateEmojis.filter(emoji => {
      return emoji.name.indexOf(this.searchValue) !== -1 && emoji.isDeleted
    });
  }

  loadDeletedEmoji() {
    this.stateEmojis = loadFromStorage();
    this.emojis = this.stateEmojis.filter(item => item.isDeleted);
  }

  restoreEmoji(emoji: Emoji) {
    restoreEmoji(emoji);
    this.updateEmojis();
  }
}

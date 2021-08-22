import { Component, OnInit } from '@angular/core';
import { Emoji } from '../interfaces/emoji';
import { MenuItem } from '../interfaces/menuItem';
import { menuItems, setActive } from '../menuItems';
import { loadFromStorage } from '../localstorage';
import { setUnloveEmoji } from '../emojiState';

@Component({
  selector: 'app-page-love',
  templateUrl: './page-love.component.html',
  styleUrls: ['./page-love.component.scss']
})
export class PageLoveComponent implements OnInit {
  emojis: Emoji[] = []
  stateEmojis: Emoji[] = []
  menuItems: MenuItem[] = menuItems
  searchValue: string = ''

  constructor() { }

  ngOnInit(): void {
    setActive('Любимые');
    this.loadLoveEmoji();
  }

  updateSearch(searchQuery: string) {
    this.searchValue = searchQuery;
    this.updateEmojis();
  }

  updateEmojis() {
    if (this.searchValue === '') {
      this.loadLoveEmoji();
      return;
    }
    this.stateEmojis = loadFromStorage();
    this.emojis = this.stateEmojis.filter(emoji => {
      return emoji.name.indexOf(this.searchValue) !== -1 && emoji.isLove
    });
  }

  loadLoveEmoji() {
    this.stateEmojis = loadFromStorage();
    this.emojis = this.stateEmojis.filter(item => item.isLove && !item.isDeleted);
  }

  deleteEmoji(emoji: Emoji) {
    setUnloveEmoji(emoji);
    this.updateEmojis();
  }
}

import { Component, OnInit } from '@angular/core';
import { PageAllService } from './page-all.service';
import { Emoji } from '../interfaces/emoji';
import { MenuItem } from '../interfaces/menuItem';
import { menuItems, setActive } from '../menuItems';
import { saveStateInStorage, loadFromStorage } from '../localstorage';
import { setDeletedEmoji, toggleLoveEmoji } from '../emojiState';

@Component({
  selector: 'app-page-all',
  templateUrl: './page-all.component.html',
  styleUrls: ['./page-all.component.scss']
})
export class PageAllComponent implements OnInit {
  emojis: Emoji[] = []
  stateEmojis: Emoji[] = []
  menuItems: MenuItem[] = menuItems
  searchValue: string = ''

  constructor(private pageAllService: PageAllService) { }

  ngOnInit(): void {
    setActive('Все');
    this.fetchEmojis();
  }

  updateSearch(searchQuery: string) {
    this.searchValue = searchQuery;
    this.updateEmojis();
  }

  updateEmojis() {
    if (this.searchValue === '') {
      this.loadUndeleteEmoji();
      return;
    }
    this.stateEmojis = loadFromStorage();
    this.emojis = this.stateEmojis.filter(emoji => {
      return emoji.name.indexOf(this.searchValue) !== -1 && !emoji.isDeleted;
    }).sort((firstEmoji, secondEmoji) => {
      const firstLargerSecond: boolean = (firstEmoji.name.indexOf(this.searchValue) > 
        secondEmoji.name.indexOf(this.searchValue));
      return firstLargerSecond ? 1 : -1;
    });
  }

  deleteEmoji(emoji: Emoji) {
    setDeletedEmoji(emoji);
    this.updateEmojis();
  }

  loveEmoji(emoji: Emoji) {
    toggleLoveEmoji(emoji);
    this.updateEmojis();
  }

  loadUndeleteEmoji() {
    this.stateEmojis = loadFromStorage();
    this.emojis = this.stateEmojis.filter(item => !item.isDeleted);
  }

  fetchEmojis() {
    const state: Emoji[] = loadFromStorage();
    this.stateEmojis = [];

    this.pageAllService.fetchEmojis().subscribe((data: any) => {
      let count = 0;
      for (const name in data) {
        let isLove = false;
        let isDeleted = false;
        const emojiInState = state.find(emoji => emoji.name === name);
        if (emojiInState) {
          isLove = emojiInState.isLove;
          isDeleted = emojiInState.isDeleted;
        }

        this.stateEmojis.push({
          name,
          url: data[name],
          isLove,
          isDeleted
        });
        count++;
        if (count > 200) break;
      }
      saveStateInStorage(this.stateEmojis);
      this.loadUndeleteEmoji();
    });
  }
}

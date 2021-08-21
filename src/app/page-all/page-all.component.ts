import { Component, OnInit } from '@angular/core';
import { PageAllService } from './page-all.service';
import { Emoji } from '../interfaces/emoji';
import { MenuItem } from '../interfaces/menuItem';
import { menuItems, setActive } from '../menuItems';
import { saveStateInStorage, loadFromStorage } from '../localstorage';

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
    this.emojis = this.stateEmojis.filter(emoji => {
      return emoji.name.indexOf(this.searchValue) !== -1 && !emoji.isDeleted
    });
  }

  deleteEmoji(emoji: Emoji) {
    const activeEmoji = this.stateEmojis.find(item => emoji.name === item.name);
    if (!activeEmoji) return;
    activeEmoji.isDeleted = true;
    activeEmoji.isLove = false;
    saveStateInStorage(this.stateEmojis);
    this.updateEmojis();
  }

  loveEmoji(emoji: Emoji) {
    const activeEmoji = this.stateEmojis.find(item => emoji.name === item.name);
    if (!activeEmoji) return;
    activeEmoji.isLove = !activeEmoji.isLove;
    saveStateInStorage(this.stateEmojis);
    this.updateEmojis();
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

  loadUndeleteEmoji() {
    const emojis: Emoji[] = loadFromStorage();
    this.emojis = emojis.filter(item => !item.isDeleted);
  }
}

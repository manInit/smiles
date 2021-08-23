import { Component, OnInit } from '@angular/core';
import { Emoji } from '../interfaces/emoji';
import { MenuItem } from '../interfaces/menuItem';
import { menuItems, setActiveMenuItem } from '../menuItems';
import { searchEmojiByName, setUnloveEmoji } from '../emojiState';

@Component({
  selector: 'app-page-love',
  templateUrl: './page-love.component.html',
  styleUrls: ['./page-love.component.scss']
})
export class PageLoveComponent implements OnInit {
  emojis: Emoji[] = []
  menuItems: MenuItem[] = menuItems
  searchValue: string = ''

  constructor() { }

  ngOnInit(): void {
    setActiveMenuItem('Любимые');
    this.updateEmojis();
  }

  updateSearch(searchQuery: string) {
    this.searchValue = searchQuery;
    this.updateEmojis();
  }

  deleteEmoji(emoji: Emoji) {
    setUnloveEmoji(emoji);
    this.updateEmojis();
  }

  updateEmojis() {
    this.emojis = searchEmojiByName(this.searchValue).filter(emoji => emoji.isLove);
  }
}

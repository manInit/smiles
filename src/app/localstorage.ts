import { Emoji } from './interfaces/emoji';

export function saveStateInStorage(emojis: Emoji[]) {
  localStorage.setItem('emojis', JSON.stringify(emojis));
}

export function loadFromStorage(): Emoji[] {
  return JSON.parse(localStorage.getItem('emojis') ?? '[]');
}

import { Emoji } from './interfaces/emoji';
import { saveStateInStorage, loadFromStorage } from './localstorage';

export function setUnloveEmoji(emoji: Emoji) {
  const stateEmojis = loadFromStorage();
  const activeEmoji: Emoji | undefined = stateEmojis.find(item => emoji.name === item.name);
  if (!activeEmoji) return;

  activeEmoji.isLove = false;
  saveStateInStorage(stateEmojis);
}

export function setDeletedEmoji(emoji: Emoji) {
  const stateEmojis = loadFromStorage();
  const activeEmoji: Emoji | undefined = stateEmojis.find(item => emoji.name === item.name);
  if (!activeEmoji) return;

  activeEmoji.isDeleted = true;
  activeEmoji.isLove = false;
  saveStateInStorage(stateEmojis);
}

export function toggleLoveEmoji(emoji: Emoji) {
  const stateEmojis = loadFromStorage();
  const activeEmoji: Emoji | undefined = stateEmojis.find(item => emoji.name === item.name);
  if (!activeEmoji) return;

  activeEmoji.isLove = !activeEmoji.isLove;
  saveStateInStorage(stateEmojis);
}

export function restoreEmoji(emoji: Emoji) {
  const stateEmojis = loadFromStorage();
  const activeEmoji = stateEmojis.find(item => emoji.name === item.name);
  if (!activeEmoji) return;

  activeEmoji.isDeleted = false;
  saveStateInStorage(stateEmojis);
}

import { Emoji } from './interfaces/emoji';
import { saveStateInStorage, loadFromStorage } from './localstorage';

interface Field {
  name: string
  value?: any
  toggle: boolean
}

function changeEmojiState(emoji: Emoji, fields: Field[]) {
  const stateEmojis: Emoji[] = loadFromStorage();
  const activeEmoji: Emoji | undefined = stateEmojis.find(item => emoji.name === item.name);
  if (!activeEmoji) {
    throw new Error('Эмоджи не найден');
  }

  for (const field of fields) {
    if (!(field.name in activeEmoji)) {
      throw new Error('Неверное имя поля');
    }
    if (field.toggle) {
      activeEmoji[field.name] = !activeEmoji[field.name];
    } else {
      activeEmoji[field.name] = field.value;
    }
  }
  
  saveStateInStorage(stateEmojis);
}


export function setUnloveEmoji(emoji: Emoji) {
  const field: Field = {
    name: 'isLove',
    value: false,
    toggle: false
  }
  changeEmojiState(emoji, [field]);
}

export function setDeletedEmoji(emoji: Emoji) {
  const field1: Field = {
    name: 'isLove',
    value: false,
    toggle: false
  }
  const field2: Field = {
    name: 'isDeleted',
    value: true,
    toggle: false
  }
  changeEmojiState(emoji, [field1, field2]);
}

export function toggleLoveEmoji(emoji: Emoji) {
  const field: Field = {
    name: 'isLove',
    toggle: true
  }
  changeEmojiState(emoji, [field]);
}

export function restoreEmoji(emoji: Emoji) {
  const field: Field = {
    name: 'isDeleted',
    value: false,
    toggle: false
  }
  changeEmojiState(emoji, [field]);
}

export function searchEmojiByName(searchQuery: string) {
  const stateEmojis: Emoji[] = loadFromStorage();
  if (searchQuery === '') return stateEmojis;
  
  return stateEmojis
    .filter(emoji => emoji.name.indexOf(searchQuery) !== -1)
    .sort(({ name: name1 }, { name: name2 }) => {
      return name1.indexOf(searchQuery) - name2.indexOf(searchQuery) || name1.length - name2.length
    });
}
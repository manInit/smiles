import { MenuItem } from './interfaces/menuItem';

export const menuItems: MenuItem[] = [
  {
    title: 'Все',
    isActive: false,
    link: '/'
  },
  {
    title: 'Любимые',
    isActive: false,
    link: '/love'
  },
  {
    title: 'Удаленные',
    isActive: false,
    link: '/deleted'
  }
];

export function setActiveMenuItem(name: string) {
  menuItems.forEach(item => item.isActive = false);

  const activeItem = menuItems.find(item => item.title === name);
  if (activeItem) activeItem.isActive = true;
}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hover-img',
  templateUrl: './hover-img.component.html',
  styleUrls: ['./hover-img.component.scss']
})
export class HoverImgComponent implements OnInit {
  @Input() src!: string

  constructor() { }

  ngOnInit(): void { }

  onHover($event: any) {
    const preview: HTMLElement = $event.target;
    const fullSize: Element | null = preview.nextElementSibling;
    if (!fullSize || !(fullSize instanceof HTMLElement)) {
      throw new Error('Не найден элемент с полноразмерной картинкой');
    }

    const bottomCoord: number = preview.getBoundingClientRect().bottom;
    if (bottomCoord + fullSize.offsetHeight < window.innerHeight * 0.75) {
      fullSize.style.top = `${bottomCoord}px`;
    } else {
      const topCoord: number = preview.getBoundingClientRect().y - 
                               fullSize.offsetHeight -
                               preview.offsetHeight;
      fullSize.style.top = `${topCoord}px`;
    }

    fullSize.style.left = `${preview.getBoundingClientRect().right}px`;
  }
}

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
    const preview = $event.target;
    const fullSize = preview.nextElementSibling;
    fullSize.style.top = preview.getBoundingClientRect().bottom + 'px';
    fullSize.style.left = preview.getBoundingClientRect().right + 'px';
  }
}

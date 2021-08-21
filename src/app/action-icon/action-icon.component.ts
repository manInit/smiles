import { Component, OnInit, Input } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-action-icon',
  templateUrl: './action-icon.component.html',
  styleUrls: ['./action-icon.component.scss']
})
export class ActionIconComponent implements OnInit {
  @Input() icon!: IconDefinition
  @Input() className!: string
  @Input() clickHandler!: Function

  constructor() { }

  ngOnInit(): void { }
}

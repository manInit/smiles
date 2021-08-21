import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from '../interfaces/menuItem';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() menuItems!: MenuItem[]

  constructor() { }

  ngOnInit(): void { }
}

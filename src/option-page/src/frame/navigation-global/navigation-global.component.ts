import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-global',
  templateUrl: './navigation-global.component.html',
  styleUrls: ['./navigation-global.component.scss'],
})
export class NavigationGlobalComponent implements OnInit {
  items: Array<string> = [
    'Top',
    'Usage',
    'Download',
    'Contact',
    'Top',
    'Usage',
    'Download',
    'Contact',
  ];

  constructor() {}

  ngOnInit(): void {}
}

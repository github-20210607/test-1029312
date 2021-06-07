import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation-global',
  templateUrl: './navigation-global.component.html',
  styleUrls: ['./navigation-global.component.scss'],
})
export class NavigationGlobalComponent {
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
}

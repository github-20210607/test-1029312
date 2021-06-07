import { Component } from '@angular/core';
import { environment } from './../../environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  appName: string = environment.APP_NAME;
  description: string =
    'This site is hypixel auction tracker... just bookmark!';
}

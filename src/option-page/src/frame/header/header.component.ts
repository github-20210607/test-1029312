import { Component, OnInit } from '@angular/core';
import { environment } from './../../environments/environment';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  appName: string = environment.APP_NAME;
  description: string =
    'This site is hypixel auction tracker... just bookmark!';

  constructor(private headerService: HeaderService) {
    this.headerService.descriptionSubject.subscribe((item: string) => {
      this.description = item;
    });
  }

  ngOnInit(): void {}
}

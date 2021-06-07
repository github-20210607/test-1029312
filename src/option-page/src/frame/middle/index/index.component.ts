/// <reference types="chrome"/>
import { Component } from '@angular/core';
import { ChromeStorage } from './../../../../../../node_modules/chrome-storage/src/chrome-storage';
const chromeStorage = new ChromeStorage();
import { HeaderService } from './../../header/header.service';

@Component({
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent {
  title = 'index';

  constructor(private headerService: HeaderService) {}

  changeValue() {
    this.headerService.descriptionSubject.next('changed');
  }

  ngOnInit() {
    this.main();
  }

  async main() {
    await chromeStorage.setPromise('', '');
  }
}

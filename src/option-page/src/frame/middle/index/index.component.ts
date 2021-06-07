/// <reference types="chrome"/>
import { Component } from '@angular/core';
import { ChromeStorage } from './../../../../../../node_modules/chrome-storage/src/chrome-storage';
const chromeStorage = new ChromeStorage();

@Component({
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent {
  title = 'index';

  ngOnInit() {
    this.main();
  }

  async main() {
    await chromeStorage.setPromise('', '');
  }
}

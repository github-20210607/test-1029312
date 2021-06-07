/// <reference types="chrome"/>
import { Component } from '@angular/core';
import { ChromeStorage } from './../../../../../../node_modules/chrome-storage/src/chrome-storage';
const chromeStorage = new ChromeStorage();

@Component({
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
})
export class UpdateComponent {
  title = 'update';

  constructor() {}

  ngOnInit() {
    this.main();
  }

  async main() {
    await chromeStorage.setPromise('', '');
  }
}

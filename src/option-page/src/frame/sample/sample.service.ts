import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SampleService {
  text: Subject<any> = new Subject();
  constructor() {}
}

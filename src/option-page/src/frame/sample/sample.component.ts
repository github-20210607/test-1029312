import { Component } from '@angular/core';
import { environment } from './../../environments/environment';
import { SampleService } from './sample.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class SampleComponent {
  appName: string = environment.APP_NAME;
  description: string = 'description';

  constructor(private sampleService: SampleService) {
    // detect change varilables
    this.sampleService.text.subscribe((item: string) => {
      this.description = item;
    });

    // change service varibles value
    this.sampleService.text.next('new value');
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'components-comunication';

  responseOfDataFromChild(data: boolean): void {
    console.log(data);
  }


}

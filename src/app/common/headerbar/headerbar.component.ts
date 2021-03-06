import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'headerbar',
  styles: [`./headerbar.component.scss`],
  templateUrl: './headerbar.component.html'
})
export class HeaderbarComponent implements OnInit {

  public localState: any;
  public setImage: any;
  constructor(
    public route: ActivatedRoute
  ) {
    this.setImage = true;
  }

  public ngOnInit() {
    this.route
      .data
      .subscribe((data: any) => {
        // your resolved data from route
        this.localState = data.yourData;
      });
// console.log('current route name', this._router.currentInstruction.component.routeName);
    console.log('hello `Headerbar` component');
    // static data that is bundled
    // var mockData = require('assets/mock-data/mock-data.json');
    // console.log('mockData', mockData);
    // if you're working with mock data you can also use http.get('assets/mock-data/mock-data.json')
  }
}

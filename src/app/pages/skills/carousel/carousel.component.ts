
import {Component, ViewChild, ViewEncapsulation} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
    selector: 'app-ngbd-carousel',
    templateUrl: './carousel.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./carousel.component.css']
  }
)

export class NgbdCarouselBasic {
  images = ["https://picsum.photos/900/500?random&t=1",
    "https://picsum.photos/900/500?random&t=2",
    "https://picsum.photos/900/500?random&t=3"]

}

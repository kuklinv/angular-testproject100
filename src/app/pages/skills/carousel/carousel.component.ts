import { Component } from '@angular/core';
 
@Component({
  selector: 'demo-carousel-multilist',
  templateUrl: './carousel.component.html'
})
export class DemoCarouselMultilistComponent {
  itemsPerSlide = 3;
  singleSlideOffset = false;
  noWrap = false;
 
  slidesChangeMessage = '';
 
  slides = [
    {image: 'https://picsum.photos/900/500?random&t=1'},
    {image: 'https://picsum.photos/900/500?random&t=2'},
    {image: 'https://picsum.photos/900/500?random&t=3'},
    {image: 'https://picsum.photos/900/500?random&t='}
    // {image: 'assets/images/nature/2.jpg'}
  ];
 
  onSlideRangeChange(indexes: number[]): void {
    this.slidesChangeMessage = `Slides have been switched: ${indexes}`;
  }
}

// import { Component } from '@angular/core';
// import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

// @Component({
//   selector: 'ngbd-carousel-config',
//   templateUrl: './carousel.component.html',
//   styleUrls: ['./carousel.component.css'],
//   providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
// })

// export class NgbdCarouselConfig  {
//   images = ["https://picsum.photos/900/500?random&t=1",
//     "https://picsum.photos/900/500?random&t=2",
//     "https://picsum.photos/900/500?random&t=3",
//     "https://picsum.photos/900/500?random&t=4"
//     ]

//   constructor(config: NgbCarouselConfig) {
//     // customize default values of carousels used by this component tree
//     config.interval = 2000;
//     config.wrap = false;
//     config.keyboard = false;
//     config.pauseOnHover = false;
//   }
// }

/*
"./src/assets/images/carousel/jsru.jpg",
"./src/assets/images/carousel/linux.pdf",
"./src/assets/images/carousel/git.pdf",
"./src/assets/images/carousel/gb.jpg",
"./src/assets/images/carousel/MBS.pdf"

"https://picsum.photos/900/500?random&t=1",
    "https://picsum.photos/900/500?random&t=2",
    "https://picsum.photos/900/500?random&t=3"
*/

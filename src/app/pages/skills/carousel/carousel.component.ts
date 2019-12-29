import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'multi-item-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class MultiItemCarouselComponent implements OnInit {
  cards = [
    {
      title: 'Card Title 1',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'Card Title 2',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'Card Title 3',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'Card Title 4',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'Card Title 5',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'Card Title 6',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'Card Title 7',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'Card Title 8',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'Card Title 9',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
  ];
  slides: any = [[]];
  chunk(arr, chunkSize) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }
  ngOnInit() {
    this.slides = this.chunk(this.cards, 3);
  }
}
// import { Component } from '@angular/core';
 
// @Component({
//   selector: 'demo-carousel-multilist',
//   templateUrl: './carousel.component.html'
// })
// export class DemoCarouselMultilistComponent {
//   itemsPerSlide = 3;
//   singleSlideOffset = false;
//   noWrap = false;
 
//   slidesChangeMessage = '';
 
//   slides = [
//     {image: 'https://picsum.photos/900/500?random&t=1'},
//     {image: 'https://picsum.photos/900/500?random&t=2'},
//     {image: 'https://picsum.photos/900/500?random&t=3'},
//     {image: 'https://picsum.photos/900/500?random&t='}
//     // {image: 'assets/images/nature/2.jpg'}
//   ];
 
//   onSlideRangeChange(indexes: number[]): void {
//     this.slidesChangeMessage = `Slides have been switched: ${indexes}`;
//   }
// }

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

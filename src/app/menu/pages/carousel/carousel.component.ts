import { AfterViewInit, Component } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-carousel',
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent implements AfterViewInit {
  
  private swiper: Swiper | undefined;

  ngAfterViewInit(): void {
    this.swiper = new Swiper('.swiper', {
      
      loop: true,
    });
  }

  ngAfterContentInit(): void {  }

  onSlideNext(){
     this.swiper?.slideNext();
  }

  onSlidePrev(){
    this.swiper?.slidePrev();
 }


}

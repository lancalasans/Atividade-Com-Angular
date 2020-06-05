import { Component, OnInit } from '@angular/core';
import Banner from '../shared/banner.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.sass']
})
export class CarouselComponent implements OnInit {

  public banner: Banner = new Banner();
  public img1: string;
  public img2: string;

  constructor() { 
    this.img1 = this.banner.banner1;
    this.img2 = this.banner.banner2;
  }

  ngOnInit() {
  }

}

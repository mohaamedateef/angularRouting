import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  layer: any;
  imageSrc?: string;
  imageName?: string;
  constructor() {}

  ngOnInit(): void {
    this.layer = document.querySelector('.fixed-layer');
  }
  close() {
    this.layer.style.display = 'none';
  }
  open(event: any) {
    this.imageSrc = event.path[1].children[0].src;
    this.layer.style.display = 'block';
    this.imageName = event.path[1].children[0].getAttribute('name');
    console.log(this.imageName);
  }
}

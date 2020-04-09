import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.css']
})
export class GoogleMapsComponent implements OnInit {

  @Input() endereco: string;
  @Input() lat: number
  @Input() lng: number;
  zoom: number = 15;

  constructor() { }

  ngOnInit() {
    // console.log(this.lat, this.lng);
  }

}

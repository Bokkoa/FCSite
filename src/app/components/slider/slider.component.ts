import { Component, OnInit } from '@angular/core';

import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  faAngleDoubleDown = faAngleDoubleDown;

  constructor() { }

  ngOnInit(): void {
  }

}

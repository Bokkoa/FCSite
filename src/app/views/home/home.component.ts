import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  faArrowRight = faArrowRight;

  constructor(
    public _router: Router
  ) { }

  ngOnInit(): void {
  }

}

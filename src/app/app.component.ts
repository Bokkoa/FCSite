import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';

import { routeTransitionAnimations } from './route-transition-animations'

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [routeTransitionAnimations]
})
export class AppComponent implements OnInit{
  title = 'fcsite';

  constructor(public _router: Router){
  }

  ngOnInit(): void {

    // JQUERY FOR JUMBOTRON
    $(document).ready(function() {
      var pathname = window.location.pathname; 
      $('a').on('click', function(e){
        if(pathname === '/')
        {
          $('app-navbar').stop(true,true).addClass("bg-dark", 1000);
          
          $('.music-player').hide();
          $('footer').hide();
          $('.card').hide();
          setInterval(function(){
          $('.music-player').show('slow');
          $('.card').show('slow');
          $('footer').show('slow');
          }, 800);
        } 
        pathname = window.location.pathname; 
      });
      $(window).on('popstate', function(event) {
         pathname = window.location.pathname; 
       });
    });

  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && 
      outlet.activatedRouteData && 
      outlet.activatedRouteData['animationState'];
   }
   
}

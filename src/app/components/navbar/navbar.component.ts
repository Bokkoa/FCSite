import { Component, OnInit, ElementRef, HostListener } from '@angular/core';

import { Router } from '@angular/router';

import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  faBars = faBars;

  public display:boolean;
  public text: String;


  constructor(
    public _router: Router,
    private eRef: ElementRef
  ){ 
    this.display = false;
    this.text = 'no clicks yet';

  }

  ngOnInit(): void {
  }

  displayDropdown(hostEvent=false){
    var lis = document.getElementsByClassName("nav-item") as HTMLCollectionOf<HTMLElement>;

    if(this.display == false && !hostEvent){

      for (var iterator = 0; iterator < lis.length; iterator++){
        lis[iterator].classList.add('show');
      }
      document.getElementById("logo").classList.add('show');
      this.display = true;

    }
    else{

      for (var iterator = 0; iterator < lis.length; iterator++){
        lis[iterator].classList.remove('show');
      }
      
      document.getElementById("logo").classList.remove('show');
      this.display = false;
    }

  }

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if(!this.eRef.nativeElement.contains(event.target)) {
     
      var dButton = document.getElementsByClassName('btn-dropdown') as HTMLCollectionOf<HTMLElement>;
      if(dButton[0].style.display != 'none')
      {
        this.displayDropdown(true);
      }
      // this.text = "clicked outside navbar";
      // console.log(this.text);
    } 
    // else {
      // this.text = "clicked inside navbar";
      // console.log(this.text);
    // }
  }

}

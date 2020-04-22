import { Component, OnInit } from '@angular/core';

import { faPlay, faPause, faStop } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {

  public player: any;

  faPlay = faPlay;
  faPause = faPause;
  faStop = faStop;

  constructor() { 
    this.player = new Audio('../../../assets/music/BraveNewWorld.mp3');
    console.log(this.player);
  }

  ngOnInit(): void {
    this.playMusic();
  }

  stopMusic()
  {
    this.player.pause();
    this.player.currentTime = 0.00;
  }

  pauseMusic()
  {
    this.player.pause();
  }

  playMusic()
  {
    this.player.play();
  }

}

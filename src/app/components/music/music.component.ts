import { Component, OnInit } from '@angular/core';

import { faPlay, faPause, faStop, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {

  public player: any;

  public songName: string;
  public status: string;
  public pathFile: string;

  faPlay = faPlay;
  faPause = faPause;
  faStop = faStop;
  faAngleDoubleRight = faAngleDoubleRight;

  constructor() { 
    this.pathFile = "../../../assets/music/";
    this.player = new Audio(this.pathFile + 'BraveNewWorld.mp3');
    this.status = 'pl';
    this.songName = "Brave New World";
    this.player.play();

  }

  ngOnInit(): void {
    // this.playMusic();
  }

  changeMusic(){
    this.player.pause();
    if(this.songName === "Brave New World")
    {
      this.player = new Audio(this.pathFile + 'MiamiSky.mp3');
      this.status = 'pl';
      this.songName = "Miami Sky";
    }else{
      this.player = new Audio(this.pathFile + 'BraveNewWorld.mp3');
      this.status = 'pl';
      this.songName = "Brave New World";
    }
    this.player.play();
  }
  stopMusic()
  {
    this.player.pause();
    this.player.currentTime = 0.00;
    this.status = 's';

  }

  pauseMusic()
  {
    this.player.pause();
    this.status = 'p';

  }

  playMusic()
  {
    this.player.play();
    this.status = 'pl';
  }

}

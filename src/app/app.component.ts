import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'libros';
  constructor(private router: Router) {}

  menu() {
    this.router.navigate(['/listado-libros']);
  }

  agregar() {
    this.router.navigate(['/agregar-libros']);
  }

  sounds: string[] = [
    'assets/sound/16.wav',
    'assets/sound/17.wav',
    'assets/sound/26.wav',
    'assets/sound/30.wav',
    'assets/sound/35.wav',
    'assets/sound/38.wav',
    'assets/sound/45.wav',
    'assets/sound/62.wav'
  ];

  reproducirNota() {
    const randomIndex = Math.floor(Math.random() * this.sounds.length);
    const audio = new Audio(this.sounds[randomIndex]);
    audio.playbackRate = 0.2;
    audio.volume = 0.5; 
    audio.play();
  }
}

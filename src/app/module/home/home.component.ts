<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
=======
import { Component } from '@angular/core';
>>>>>>> 0405a2437e1028b7a173838ab8135c1bbbf56f42

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
<<<<<<< HEAD
export class HomeComponent implements OnInit {
  currentYear: number;

  constructor() {
    this.currentYear = new Date().getFullYear();
  }

  ngOnInit() {
    // Otras inicializaciones si es necesario
  }
=======
export class HomeComponent {

>>>>>>> 0405a2437e1028b7a173838ab8135c1bbbf56f42
}

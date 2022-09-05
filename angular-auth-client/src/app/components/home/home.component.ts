import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name: string | null;

  constructor() { 
    this.name = '';
  }

  ngOnInit(): void {
    // localStorage.getItem("currentUser");
    this.name = JSON.parse(localStorage.getItem("userData") as string).name;
  }

}

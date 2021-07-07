import { Component, OnInit } from '@angular/core';
declare var $: any;


declare global {
  interface Element {
      value: any;
      //msExitFullscreen: any;
  }

  interface HTMLElement {
   // msRequestFullscreen?: () => Promise<void>;
  }
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {



  }

}

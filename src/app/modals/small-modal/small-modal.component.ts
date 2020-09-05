import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-modal',
  templateUrl: './small-modal.component.html',
  styleUrls: ['./small-modal.component.css']
})
export class SmallModalComponent implements OnInit {

  header:"";
  body:"";
  constructor() { }
  

  ngOnInit(): void {
  }

}

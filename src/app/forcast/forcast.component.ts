import { Component, OnInit,Input } from '@angular/core';
import {Weather} from '../weather';



@Component({
  selector: 'app-forcast',
  templateUrl: './forcast.component.html',
  styleUrls: ['./forcast.component.css']
})
export class ForcastComponent implements OnInit {
  @Input() result;
  constructor() { }
   forcastData:Array<Weather>;
  ngOnInit() {
  }

}

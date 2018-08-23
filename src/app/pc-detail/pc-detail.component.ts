import { Component, OnInit, Input } from '@angular/core';
import { Pc } from '../pc';
 
@Component({
  selector: 'app-pc-detail',
  templateUrl: './pc-detail.component.html',
  styleUrls: ['./pc-detail.component.css']
})
export class PcDetailComponent implements OnInit {
  @Input() pc: Pc;
 
  constructor() { }
 
  ngOnInit() {
  }
 
}

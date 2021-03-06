import { Component, OnInit } from '@angular/core';
 
import { Pc } from '../pc';
import { PcService } from '../pc.service';
 
@Component({
  selector: 'app-pcs',
  templateUrl: './pcs.component.html',
  styleUrls: ['./pcs.component.css']
})
export class PcsComponent implements OnInit {
  pcs: Pc[];
 
  constructor(private pcService: PcService) { }
 
  ngOnInit() {
    this.getPcs();
  }
 
  getPcs(): void {
    this.pcService.getPcs()
    .subscribe(pcs => this.pcs = pcs);
  }
}
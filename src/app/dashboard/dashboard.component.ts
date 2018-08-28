import { Component, OnInit } from '@angular/core';
import { Pc } from '../pc';
import { PcService } from '../pc.service';
 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  pcs: Pc[] = [];
 
  constructor(private pcService: PcService) { }
 
  ngOnInit() {
    this.getPcs();
  }
 
  getPcs(): void {
    this.pcService.getPcs()
      .subscribe(pcs => this.pcs = pcs.slice(1, 5));
  }
}







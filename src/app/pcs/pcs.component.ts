import { Component, OnInit } from '@angular/core';
 
import { Pc } from '../pc';
import { PcService } from '../pc.service';
 
@Component({
  selector: 'app-pc',
  templateUrl: './pc.component.html',
  styleUrls: ['./pc.component.css']
})
export class PcComponent implements OnInit {
 
  selectedPc: Pc;
 
  pcs: Pc[];
 
  constructor(private pcService: PcService) { }
 
  ngOnInit() {
    this.getPc();
  }
 
  onSelect(pc: Pc): void {
    this.selectedPc= pc;
  }
 
  getPc(): void {
    this.pcService.getPc()
        .subscribe(pc => this.pcs = pc);
  }
}
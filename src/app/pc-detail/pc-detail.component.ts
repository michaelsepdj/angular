import { Component, OnInit, Input } from '@angular/core';
import { Pc } from '../pc';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { PcService }  from '../pc.service'; 


@Component({
  selector: 'app-pc-detail',
  templateUrl: './pc-detail.component.html',
  styleUrls: ['./pc-detail.component.css']
})
export class PcDetailComponent implements OnInit {
  @Input() pc: Pc;
 
  constructor(
    private route: ActivatedRoute,
    private PcService: PcService,
    private location: Location
  ) {}
 
  ngOnInit(): void {
    this.getPc();
  }
  
  getPc(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.PcService.getPc(id)
      .subscribe(pc => this.pc = pc);
  }
  goBack(): void {
    this.location.back();
  }
}
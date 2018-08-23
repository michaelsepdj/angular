import { Injectable } from '@angular/core';
 
import { Observable, of } from 'rxjs';
 
import { Pc } from './pc';
import { PC } from './mock-pc';
import { MessageService } from './message.service';
 
@Injectable({
  providedIn: 'root',
})
export class PcService {
 
  constructor(private messageService: MessageService) { }
 
  getPc(): Observable<Pc[]> {
    // TODO: send the message _after_ fetching the Pcs
    this.messageService.add('PcService: fetched pcs');
    return of(PC);
  }
}

import { Injectable } from '@angular/core';
 
import { Observable, of } from 'rxjs';
 
import { Pc } from './pc';
import { PC } from './mock-pc';
import { MessageService } from './message.service';
 
@Injectable({ providedIn: 'root' })
export class PcService {
 
  constructor(private messageService: MessageService) { }
 
  getPcs(): Observable<Pc[]> {
    // TODO: send the message _after_ fetching the pc
    this.messageService.add('PcService: fetched pc');
    return of(PC);
  }
 
  getPc(id: number): Observable<Pc> {
    // TODO: send the message _after_ fetching the pc
    this.messageService.add(`PcService: fetched pc id=${id}`);
    return of(PC.find(pc => pc.id === id));
  }
}
 




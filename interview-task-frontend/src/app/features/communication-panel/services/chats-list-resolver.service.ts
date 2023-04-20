import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Category } from '../models/category.model';
import { ChatsService } from './chats.service';

@Injectable({
  providedIn: 'root'
})
export class ChatsListResolverService implements Resolve<Category[]>{

  constructor(private chatsService: ChatsService) { }
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Category[]> {
    return this.chatsService.getChats();
  }
}

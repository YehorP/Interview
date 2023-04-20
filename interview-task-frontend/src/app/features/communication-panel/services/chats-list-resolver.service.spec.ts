import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { of } from 'rxjs';

import { ChatsListResolverService } from './chats-list-resolver.service';
import { ChatsService } from './chats.service';
import { Category } from '../models/category.model';
import { categoriesMock } from '../mocks/categories.mock';

describe('ChatsListResolverService', () => {
  let service: ChatsListResolverService;
  let chatsServiceSpy: jasmine.SpyObj<ChatsService>;

  const mockCategories: Category[] = categoriesMock;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('ChatsService', ['getChats']);

    TestBed.configureTestingModule({
      providers: [
        ChatsListResolverService,
        { provide: ChatsService, useValue: spy }
      ]
    });

    service = TestBed.inject(ChatsListResolverService);
    chatsServiceSpy = TestBed.inject(ChatsService) as jasmine.SpyObj<ChatsService>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('resolve', () => {
    it('should return an Observable<Category[]>', () => {
      chatsServiceSpy.getChats.and.returnValue(of(mockCategories));

      const route = {} as ActivatedRouteSnapshot;
      const state = {} as RouterStateSnapshot;

      service.resolve(route, state).subscribe(categories => {
        expect(categories.length).toBe(2);
        expect(categories).toEqual(mockCategories);
      });

      expect(chatsServiceSpy.getChats.calls.count()).toBe(1);
    });
  });
});
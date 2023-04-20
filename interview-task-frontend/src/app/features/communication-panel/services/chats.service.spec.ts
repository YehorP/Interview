import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ChatsService } from './chats.service';
import { Category } from '../models/category.model';
import { environment } from 'src/environments/environment';
import { categoriesMock } from '../mocks/categories.mock';

describe('ChatsService', () => {
  let service: ChatsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ChatsService]
    });
    service = TestBed.inject(ChatsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a list of chats', () => {
    const mockChats: Category[] = categoriesMock;

    service.getChats().subscribe((chats: Category[]) => {
      expect(chats.length).toBe(2);
      expect(chats).toEqual(mockChats);
    });

    const req = httpMock.expectOne(`${environment.apiUrl}/chat`);
    expect(req.request.method).toBe('GET');
    req.flush(mockChats);
  });
});
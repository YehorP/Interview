import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ChattingService } from './chatting.service';
import { Chat } from '../models/chat.model';
import { Message } from '../models/message.model';
import { environment } from 'src/environments/environment';
import { chatMock } from '../mocks/chat.mock';
import { messageMock } from '../mocks/message.mock';

describe('ChattingService', () => {
  let service: ChattingService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ChattingService]
    });
    service = TestBed.inject(ChattingService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getMessagesByChatId', () => {
    it('should return an observable of Chat', () => {
      const chatId = 1;
      const chat: Chat = chatMock;
      service.getMessagesByChatId(chatId).subscribe((result) => {
        expect(result).toEqual(chat);
      });
      const req = httpMock.expectOne(`${environment.apiUrl}/chat/${chatId}/message`);
      expect(req.request.method).toEqual('GET');
      req.flush(chat);
    });
  });

  describe('sendMessage', () => {
    it('should return an observable of Message', () => {
      const chatId = 1;
      const message: Message = messageMock;
      service.sendMessage(chatId, message).subscribe((result) => {
        expect(result).toEqual(message);
      });
      const req = httpMock.expectOne(`${environment.apiUrl}/chat/${chatId}/message`);
      expect(req.request.method).toEqual('POST');
      expect(req.request.body).toEqual(message);
      req.flush(message);
    });
  });
});
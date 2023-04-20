import { Injectable } from '@angular/core';
import { Chat } from '../models/chat.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Message } from '../models/message.model';

@Injectable({
  providedIn: 'root'
})
export class ChattingService {

  baseUrl = '/chat';

  constructor(private httpClient: HttpClient) { }

  getMessagesByChatId(chatId: number): Observable<Chat> {
    return this.httpClient.get<Chat>(`${environment.apiUrl}${this.baseUrl}/${chatId}/message`);
  }

  sendMessage(chatId: number, message: Message): Observable<Message> {
    return this.httpClient.post<Message>(`${environment.apiUrl}${this.baseUrl}/${chatId}/message`, message);
  }
}

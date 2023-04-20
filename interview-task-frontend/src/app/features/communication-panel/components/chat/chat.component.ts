import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ChatInfo } from '../../models/chat-info.model';
import { ChattingService } from '../../services/chatting.service';
import { Chat } from '../../models/chat.model';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy {

  destroy$: Subject<void>;

  selectedChatInfo: ChatInfo;


  messagesData: Chat;

  messagesForm: FormGroup;

  @Input() set selectedChat(selectedChatInfo: ChatInfo) {
    if (selectedChatInfo) {
      this.selectedChatInfo = selectedChatInfo;
      this.chattingService.getMessagesByChatId(selectedChatInfo.chatId)
        .pipe(takeUntil(this.destroy$))
        .subscribe(data => {
          if (data)
            this.messagesData = data;
        });
    }
  };

  constructor( private chattingService: ChattingService) { }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  ngOnInit(): void {
    this.destroy$ = new Subject();
    this.messagesForm =  new FormGroup({
      message: new FormControl("")
    });
  }

  handleMessageSending(): void {
    const message = { author: "You", text: this.messagesForm.get("message")?.value, date: new Date(Date.now()) };
    this.messagesData.messages.push(message);
    this.selectedChatInfo.lastMessage = message;
    this.chattingService.sendMessage(this.selectedChatInfo.chatId, message)
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => {
        this.messagesData.messages.push(data);
        this.selectedChatInfo.lastMessage = data;
      })
  }

}

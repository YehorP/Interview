import { Component, OnInit } from '@angular/core';
import { ChatInfo } from '../../models/chat-info.model';

@Component({
  selector: 'app-chats-page',
  templateUrl: './chats-page.component.html',
  styleUrls: ['./chats-page.component.scss']
})
export class ChatsPageComponent implements OnInit {

  selectedChat: ChatInfo;

  constructor() { }

  ngOnInit(): void {
  }

  handleChatSelection(selectedChat: ChatInfo): void {
    this.selectedChat = selectedChat;
  }

}

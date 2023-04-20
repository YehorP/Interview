import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Category } from '../../models/category.model';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ChatInfo } from '../../models/chat-info.model';

@Component({
  selector: 'app-chats-list',
  templateUrl: './chats-list.component.html',
  styleUrls: ['./chats-list.component.scss']
})
export class ChatsListComponent implements OnInit, OnDestroy {

  categoriesData: Category[];

  selectedChat: ChatInfo;

  categoriesExpanded: { [key in string]: boolean } = {}

  destroy$: Subject<void>;

  @Output() chatSelection = new EventEmitter<ChatInfo>();

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  ngOnInit(): void {
    this.destroy$ = new Subject();
    this.activatedRoute.data
    .pipe(takeUntil(this.destroy$))
    .subscribe(({ chats }) => {
      this.categoriesData = chats;
      this.categoriesExpanded = {};
      for (let category of this.categoriesData) {
        this.categoriesExpanded[category.categoryName] = true;
      }
    })
   
  }

  handleChatSelection(chat: ChatInfo): void {
    this.selectedChat = chat;
    this.chatSelection.emit(chat);
  }

  handlePanelToggle(categoryName: string): void {
    this.categoriesExpanded[categoryName] = !this.categoriesExpanded[categoryName];
  }
}

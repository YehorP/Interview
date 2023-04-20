import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { ChatInfo } from '../../models/chat-info.model';
import { Chat } from '../../models/chat.model';
import { ChattingService } from '../../services/chatting.service';
import { ChatComponent } from './chat.component';
import { chatInfoMock } from '../../mocks/chat-info.mocks';
import { chatMock } from '../../mocks/chat.mock';
import { messageMock } from '../../mocks/message.mock';

describe('ChatComponent', () => {
  let component: ChatComponent;
  let fixture: ComponentFixture<ChatComponent>;
  let chattingServiceSpy: jasmine.SpyObj<ChattingService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('ChattingService', ['getMessagesByChatId', 'sendMessage']);

    await TestBed.configureTestingModule({
      declarations: [ ChatComponent ],
      imports: [
        BrowserAnimationsModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
      ],
      providers: [
        FormBuilder,
        { provide: ChattingService, useValue: spy },
      ],
    })
    .compileComponents();

    chattingServiceSpy = TestBed.inject(ChattingService) as jasmine.SpyObj<ChattingService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set selectedChatInfo and messagesData when selectedChat input changes', () => {
    const chatInfo: ChatInfo = chatInfoMock;
    const chat: Chat = chatMock;

    chattingServiceSpy.getMessagesByChatId.and.returnValue(of(chat));

    component.selectedChat = chatInfo;

    expect(component.selectedChatInfo).toEqual(chatInfo);
    expect(component.messagesData).toEqual(chat);
  });
});
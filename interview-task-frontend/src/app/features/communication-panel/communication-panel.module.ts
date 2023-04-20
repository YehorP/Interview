import { NgModule } from '@angular/core';
import { ChatsListComponent } from './components/chats-list/chats-list.component';
import { ChatComponent } from './components/chat/chat.component';
import { ChatsPageComponent } from './pages/chats-page/chats-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommunicationPanelRoutingModule } from './communication-panel-routing.module';




@NgModule({
  declarations: [
    ChatComponent,
    ChatsListComponent,
    ChatsPageComponent
  ],
  imports: [
    SharedModule,
    CommunicationPanelRoutingModule
  ]
})
export class CommunicationPanelModule { }

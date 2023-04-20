import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ChatsPageComponent } from './pages/chats-page/chats-page.component';
import { ChatsListResolverService } from './services/chats-list-resolver.service';

const routes: Routes = [
    {
      path: '',
      pathMatch: 'full',
      component: ChatsPageComponent,
      resolve: {chats: ChatsListResolverService},
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class CommunicationPanelRoutingModule { }
  
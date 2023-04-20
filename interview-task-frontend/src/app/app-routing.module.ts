import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'chats',
    pathMatch: 'full'
  },
  {
    path: 'chats',
    loadChildren: () => import('./features/communication-panel/communication-panel.module').then(m => m.CommunicationPanelModule)
  },
  {
    path: '**',
    redirectTo: 'chats',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { ConfirmComponent } from './confirm/confirm.component';
 import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReceiverComponent } from './receiver/receiver.component';
import { SenderComponent } from './sender/sender.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { StartRegistrationComponent } from './start-registration/start-registration.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'registration',
  },

  {
    path: 'registration',
    component: StartRegistrationComponent,
    data: {
      animation: 'registration',
    },
  },
  {
    path: 'sender',
    component: SenderComponent,
    data: {
      animation: 'sender',
    },
  },

  {
    path: 'receiver',
    component: ReceiverComponent,
    data: {
      animation: 'receiver',
    },
  },

  {
    path: 'confirmation',
    component: ConfirmationComponent,
    data: {
      animation: 'confirmation',
    },
  },

  {
    path: 'confirm',
    component: ConfirmComponent,
    data: {
      animation: 'confirm'
    }
  }
];
 
 
 
 @NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule],
 })
 export class AppRoutingModule {}
 
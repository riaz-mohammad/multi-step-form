import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { StepComponent } from './step/step.component';
import { StepBarComponent } from './step-bar/step-bar.component';
import { StepperComponent } from './stepper/stepper.component';
import { FormComponent } from './form/form.component';
import { ButtonComponent } from './button/button.component';
import { SenderComponent } from './sender/sender.component';
import { ReceiverComponent } from './receiver/receiver.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { AppRoutingModule } from './app.routing-module';
import { FormsComponent } from './forms/forms.component';
import { BackButtonComponent } from './back-button/back-button.component';
import { ProgressComponent } from './progress/progress.component';
import { InputComponent } from './input/input.component';
import { CurrentDirective } from './current.directive';
import { StartRegistrationComponent } from './start-registration/start-registration.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { ConfirmComponent } from './confirm/confirm.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    StepComponent,
    StepBarComponent,
    StepperComponent,
    FormComponent,
    ButtonComponent,
    SenderComponent,
    ReceiverComponent,
    ConfirmationComponent,
    FormsComponent,
    BackButtonComponent,
    ProgressComponent,
    InputComponent,
    CurrentDirective,
    StartRegistrationComponent,
    WrapperComponent,
    ConfirmComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

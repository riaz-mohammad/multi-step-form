import { BehaviorSubject, Subject, ReplaySubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

export interface FormData {
  name: string;
  surname: string;
  city: string;
  country: string;
}


@Injectable({
  providedIn: 'root'
})
export class StepService {
  stepOne$ = new BehaviorSubject<boolean>(true);
  stepTwo$ = new BehaviorSubject<boolean>(false);
  stepThree$ = new BehaviorSubject<boolean>(false);
  progress$ = new BehaviorSubject<string>('0%');
  percent$ = new BehaviorSubject<number>(190);
  sender$ = new ReplaySubject<FormData>(1);
  receiver$ = new ReplaySubject<FormData>(1);

  stepOne(flag: boolean): void {
    this.stepOne$.next(flag);

  }

  stepTwo(flag: boolean): void {
    this.stepTwo$.next(flag);
  }
  
  stepThree(flag: boolean): void {
    this.stepThree$.next(flag);
  }

  progress(progress: string, percent: number): void {
    this.progress$.next(progress);
    this.percent$.next(percent);
  }
  
  getFormData(formType: string): Observable<FormData> {
    return formType === 'sender' ? this.sender$ : this.receiver$;
  }

  saveFormData(formType: string, formData: FormData): void {
    if (!formType) return;
    formType === 'sender' ?
      this.sender$.next(formData) :
      this.receiver$.next(formData);
  }
      

}

import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Calculation } from '../models/result.model';
import { HttpErrorResponse, HttpParams } from '@angular/common/http';

@Injectable()
export class CalculatorService {

   constructor(private apiService: ApiService) { }

   doOperation(operand1: number, operand2: number, operation: string): Observable<Calculation> {
      return this.apiService.post(operation, { "a": operand1, "b": operand2 });
   }

  getAll(): Observable<Calculation[]> {
    return this.apiService.getAll();
  }

}

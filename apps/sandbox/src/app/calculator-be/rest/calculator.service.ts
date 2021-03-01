import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Result } from '../models/result.model';
import { HttpErrorResponse, HttpParams } from '@angular/common/http';

@Injectable()
export class CalculatorService {

   constructor(private apiService: ApiService) { }

   doOperation(operand1: number, operand2: number, operation: string): Observable<Result> {
      return this.apiService.post(operation, { "a": operand1, "b": operand2 });
   }

  getAll(): Observable<Result[]> {
    return this.apiService.getAll();
  }

}

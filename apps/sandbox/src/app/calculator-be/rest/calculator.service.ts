import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Calculation } from '../models/calculation.model';

@Injectable()
export class CalculatorService {

   constructor(private apiService: ApiService) { }

   doCalculation(inputA: number, inputB: number, operation: string): Observable<Calculation> {
      return this.apiService.post(operation, { "a": inputA, "b": inputB });
   }

  getCalculationHistory(): Observable<Calculation[]> {
    return this.apiService.getAll();
  }

}

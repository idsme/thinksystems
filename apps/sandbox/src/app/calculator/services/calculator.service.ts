import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Calculation } from '../models/calculation.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

//If not set divide fails.
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};


@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  constructor(private http: HttpClient) { }

  doCalculation(inputA: number, inputB: number, operation: string): Observable<Calculation> {
    return this.http.post<Calculation>(`${environment.api_url}/${operation}`, JSON.stringify({ "a": inputA, "b": inputB }), httpOptions);
  }

  getCalculationHistory(): Observable<Calculation[]> {
    return this.http.get<Calculation[]>(`${environment.api_url}`, httpOptions);
  }

  public static convertOperationSymbolToOperationType(operationSymbol: string): string {
    let operationType = "unknown";
    switch (operationSymbol) {
      case '+':
        operationType = 'add';
        break;
      case '-':
        operationType = 'subtract';
        break;
      case '*':
        operationType = 'multiply';
        break;
      case '/':
        operationType = 'divide';
        break;
    }
    return operationType;
  }
}

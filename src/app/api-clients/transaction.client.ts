import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Transaction } from './models/transaction.model';

@Injectable({ providedIn: 'root' })
export class TransactionClient {
    historyApiEndpoint = (pagesize: number, pageindex: number): string =>
    `${environment.apiUrl}/transactions/history?pageindex=${pageindex}&pagesize=${pagesize}`
    createTransactionApiEndpoint = `${environment.apiUrl}/transactions/create`;
    createTransactionTokenApiEndpoint = `${environment.apiUrl}/transactions/createtoken`;

    constructor(protected httpClient: HttpClient) {
    }

    history(pagesize: number, pageindex: number): Observable<any> {
        return this.httpClient.get(`${this.historyApiEndpoint(pagesize, pageindex)}`);
    }

    create(model: Transaction): Observable<any> {
      return this.httpClient.post<Transaction>(`${this.createTransactionApiEndpoint}`, model);
    }

    createToken(model: Transaction): Observable<any> {
      return this.httpClient.post<Transaction>(`${this.createTransactionTokenApiEndpoint}`, model);
    }
}

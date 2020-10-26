import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { AccountInfoRes } from './models/account.model';

@Injectable({ providedIn: 'root' })
export class AccountClient {
    createApiEndpoint: string = `${environment.apiUrl}/accounts/add`;
    importApiEndpoint: string = `${environment.apiUrl}/accounts/import`;
    listApiEndpoint: string = `${environment.apiUrl}/accounts/list`;
    infoApiEndpoint: string = `${environment.apiUrl}/accounts/info`;
    switchApiEndpoint: string = `${environment.apiUrl}/accounts/switch`;
    balanceApiEndpoint: string = `${environment.apiUrl}/accounts/balance`;
    syncApiEndpoint: string = `${environment.apiUrl}/accounts/sync`;
    syncAllApiEndpoint: string = `${environment.apiUrl}/accounts/syncall`;
    unspentApiEndpoint: string = `${environment.apiUrl}/accounts/unspent`;

    constructor(protected httpClient: HttpClient) {
    }

    list(): Observable<any> {
        return this.httpClient.post<any>(`${this.listApiEndpoint}`, {});
    }

    info(model: any): Observable<AccountInfoRes> {
      return this.httpClient.post<AccountInfoRes>(`${this.infoApiEndpoint}`, model);
    }

    add(model: { name: string, passphrase: string}): Observable<any> {
      return this.httpClient.post<{ name: string, passphrase: string}>(`${this.createApiEndpoint}`, model);
    }

    import(model: { name: string, passphrase: string, privatekey: string}): Observable<any> {
        return this.httpClient.post<{ name: string, passphrase: string, privatekey: string}>(`${this.importApiEndpoint}`, model);
    }

    switch(model: { name: string, passphrase: string}): Observable<any> {
      return this.httpClient.post<{ name: string, passphrase: string}>(`${this.switchApiEndpoint}`, model);
    }

    sync(model: { publickey: string, passphrase: string }): Observable<any> {
      return this.httpClient.post<any>(`${this.syncApiEndpoint}`, model);
    }

    syncAll(model: { passphrase: string }): Observable<any> {
      return this.httpClient.post<any>(`${this.syncAllApiEndpoint}`, model);
    }

    getUnspent(model: {tokenid: string}): Observable<any> {
      return this.httpClient.post<any>(`${this.unspentApiEndpoint}`, model);
    }

    getBalance(model: { tokenid: string }): Observable<any> {
      return this.httpClient.post<{ tokenid: string }>(`${this.balanceApiEndpoint}`, model);
    }
}

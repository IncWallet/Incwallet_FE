import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class WalletClient {
    createApiEndpoint: string = `${environment.apiUrl}/wallet/create`;
    importApiEndpoint: string = `${environment.apiUrl}/wallet/import`;

    constructor(protected httpClient: HttpClient) {
    }

    create(model: {security: number, passphrase: string, network: string}): Observable<any> {
        return this.httpClient.post<{security: number, passphrase: string, network: string}>(`${this.createApiEndpoint}`, model);
    }

    import(model: {mnemonic: string, passphrase: string, network: string}): Observable<any> {
        return this.httpClient.post<{mnemonic: string, security: number, passphrase: string, network: string}>(
            `${this.importApiEndpoint}`, model
            );
    }
}

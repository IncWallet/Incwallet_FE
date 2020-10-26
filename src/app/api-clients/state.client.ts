import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class StateClient {
    infoApiEndpoint: string = `${environment.apiUrl}/state`;

    constructor(protected httpClient: HttpClient) {
    }

    info(): Observable<any> {
        return this.httpClient.post<any>(`${this.infoApiEndpoint}`, {});
    }
}

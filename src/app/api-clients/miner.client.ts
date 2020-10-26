import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { MinertListRes } from './models/miner.model';

@Injectable({ providedIn: 'root' })
export class MinerClient {
    minerApiEndpoint: string = `${environment.apiUrl}/miner/allinfo`;

    constructor(protected httpClient: HttpClient) {
    }
    info(): Observable<MinertListRes> {
        return this.httpClient.post<MinertListRes>(`${this.minerApiEndpoint}`, {});
    }
}

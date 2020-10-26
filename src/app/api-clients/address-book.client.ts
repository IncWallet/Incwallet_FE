import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { AddressBooksRes, AddressBooksReq } from './models/address-book.model';

@Injectable({ providedIn: 'root' })
export class AddressBookClient {
    addApiEndpoint: string = `${environment.apiUrl}/addressbooks/add`;
    removeApiEndpoint: string = `${environment.apiUrl}/addressbooks/remove`;
    updateApiEndpoint: string = `${environment.apiUrl}/addressbooks/update`;
    getAllApiEndpoint: string = `${environment.apiUrl}/addressbooks/getall`;

    constructor(protected httpClient: HttpClient) {
    }

    add(model: AddressBooksReq): Observable<any> {
        return this.httpClient.post<any>(`${this.addApiEndpoint}`, model);
    }

    remove(model: AddressBooksReq): Observable<any> {
        return this.httpClient.post<any>(`${this.removeApiEndpoint}`, model);
    }

    update(model: AddressBooksReq): Observable<any> {
      return this.httpClient.post<any>(`${this.updateApiEndpoint}`, model);
    }

    getAll(): Observable<AddressBooksRes> {
        return this.httpClient.post<AddressBooksRes>(`${this.getAllApiEndpoint}`, {});
    }
}

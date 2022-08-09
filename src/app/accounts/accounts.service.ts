import { Account } from './account';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { APIResponse } from '../shared/api-response';

@Injectable({
    providedIn: 'root'
})
export class AccountsService {
    private API_URL = 'http://localhost:3000/api/v1/accounts';

    private handleHTTPError(err: any): Observable<APIResponse> {
        console.log(err);
        return of({ status: 'error', message: err.error.message });
    }

    constructor(private http: HttpClient) { }

    getAllAccounts(): Observable<APIResponse<Account[] | undefined>> {
        return this.http.get<APIResponse<Account[]>>(this.API_URL).pipe(catchError(this.handleHTTPError));
    }

    getAccountByID(id: string): Observable<APIResponse<Account | undefined>> {
        return this.http.get<APIResponse<Account>>(this.API_URL + '/' + id).pipe(catchError(this.handleHTTPError));
    }

    getAccountByStudentID(id: string): Observable<APIResponse<Account | undefined>> {
        return this.http.get<APIResponse<Account>>(this.API_URL + '/student/' + id).pipe(catchError(this.handleHTTPError));
    }

    createAccount(data: Account): Observable<APIResponse<Account | undefined>> {
        return this.http.post<APIResponse<Account>>(this.API_URL, data).pipe(catchError(this.handleHTTPError));
    }

    updateAccount(id: string, data: Account): Observable<APIResponse<Account | undefined>> {
        return this.http.put<APIResponse<Account>>(this.API_URL + '/' + id, data).pipe(catchError(this.handleHTTPError));
    }

    deleteAccount(id: string): Observable<APIResponse<null | undefined>> {
        return this.http.delete<APIResponse<null>>(this.API_URL + '/' + id).pipe(catchError(this.handleHTTPError));
    }
}

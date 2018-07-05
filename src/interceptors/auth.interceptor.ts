import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { MASTER_TOKEN } from '../config';
import { Observable } from "rxjs";
import { apiUrl } from '../config';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

	constructor() { }

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		if (req.url.indexOf(`${apiUrl}`) < 0) {
			return next.handle(req);
		}

		let headers = new HttpHeaders()
			.set('Content-Type', 'application/json');

		// Do not add authenication headers
		// 1: During authenication
		// 2. other.
		// var isAuthentication = req.url.indexOf(`/auth/`) > 0;
    const isAuthentication = false;

		if (!isAuthentication) {
			headers = headers.set('Authorization', 'Bearer ' + MASTER_TOKEN);
		}

		const authReq = req.clone({ headers: headers });
		// return next.handle(authReq);
		return next.handle(authReq).pipe(
			tap((event: HttpEvent<any>) => {}, (err: any) => {
				if (err instanceof HttpErrorResponse) {
					console.log('HTTP error: ', err);
				}
			})
		);

	}
}

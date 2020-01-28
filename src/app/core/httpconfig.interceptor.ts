import { Injectable, Injector, Inject } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HttpConfigInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headersConfig = {};

    headersConfig['Content-Type'] = 'application/json';
    headersConfig['Accept'] = 'application/json';

    const request = req.clone({
      setHeaders: headersConfig
    });

    return next.handle(request);
  }
}

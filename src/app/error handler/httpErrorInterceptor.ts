import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { NotificationService } from './notification.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(
    private router: Router,
    private notificationService: NotificationService
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          // Client-side error
          errorMessage = `Error: ${error.error.message}`;
        } else {
          // Server-side error
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}\nDetails: ${error.error.details}`;

          // Handle specific status codes
          if (error.status === 404) {
            this.router.navigate(['/not-found']);
          } else if (error.status === 401) {
            this.router.navigate(['/unauthorized']);
          } else if (error.status === 500) {
            this.router.navigate(['/server-error']);
          } else if (error.status === 0) {
            this.router.navigate(['/network-error']);
          }
        }
        console.error(error.error.Message);
        if (error.error.Message) {
          this.notificationService.notification.show(error.error.Message);
        }
        return throwError(error.error.Message);
      })
    );
  }
}

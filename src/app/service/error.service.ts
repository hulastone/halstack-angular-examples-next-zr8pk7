import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ErrorsHandler implements ErrorHandler {
  router = this.injector.get(Router);
  constructor(private injector: Injector) {}

  handleError(error) {
    let errorMessage = '';
    const router = this.injector.get(Router);

    if (error.error instanceof ErrorEvent) {
      // client-side error

      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error

      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    router.navigate(['/404'], { queryParams: { error: error } });
    console.log(errorMessage);
  }
}

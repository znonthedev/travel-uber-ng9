import { Injectable, ErrorHandler } from '@angular/core';
import { HttpErrorResponse } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { NotificationService } from '@app/services/notification.service';

@Injectable(
  {
  providedIn: 'root'
}
)
export class AppErrorHandlerService extends ErrorHandler{

  constructor(private notificationsService: NotificationService) {
    super();
  }

  handleError(error: Error | HttpErrorResponse) {
    let displayMessage = 'An error occurred.';

    if (!environment.production) {
      displayMessage += ' See console for details.';
    }

    this.notificationsService.error(displayMessage);

    super.handleError(error);
  }
}
